import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BusinessIcon from '@mui/icons-material/Business';
import SendIcon from '@mui/icons-material/Send';
import DonateModal from '../components/DonateModal';

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState('volunteer');
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    volunteerType: '',
    availability: '',
    interests: [],
    donationAmount: '',
    donationType: 'onetime',
    businessName: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev.interests, name]
        : prev.interests.filter(item => item !== name)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const volunteerOpportunities = [
    {
      icon: '📚',
      title: 'Education Support',
      description: 'Help students with tutoring, mentoring, and study guidance.',
      volunteers: '150+',
    },
    {
      icon: '🏥',
      title: 'Health Programs',
      description: 'Assist in organizing health camps and wellness initiatives.',
      volunteers: '80+',
    },
    {
      icon: '🎉',
      title: 'Event Organization',
      description: 'Help plan and execute community events and celebrations.',
      volunteers: '200+',
    },
    {
      icon: '🤲',
      title: 'Community Service',
      description: 'Participate in distribution drives and community outreach.',
      volunteers: '300+',
    },
    {
      icon: '💻',
      title: 'Digital Support',
      description: 'Help with website, social media, and online communications.',
      volunteers: '40+',
    },
    {
      icon: '📋',
      title: 'Administrative',
      description: 'Support with documentation, records, and coordination.',
      volunteers: '60+',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Get Involved - Dharmamma Trust</title>
        <meta name="description" content="Join Dharmamma Trust as a volunteer or donor. Learn how you can contribute to our mission of community service." />
        <meta name="keywords" content="volunteer, donate, partnership, get involved, contribute" />
        <meta property="og:title" content="Get Involved - Dharmamma Trust" />
        <meta property="og:description" content="Volunteer, donate, or partner with us" />
      </Helmet>

      {/* Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2E5090 0%, #1B3057 100%)',
          color: 'white',
          py: 6,
          mb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700,color:"white" }}>
            Get Involved
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95, mt: 2 }}>
            Make a Difference in Your Community
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Ways to Get Involved */}
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
          Ways to Contribute
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', cursor: 'pointer', height: '100%', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-8px)' } }} onClick={() => setActiveTab('volunteer')}>
              <CardContent>
                <VolunteerActivismIcon sx={{ fontSize: 64, color: '#2E5090', mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 1 }}>Volunteer</Typography>
                <Typography variant="body2" color="text.secondary">
                  Dedicate your time and skills to help our mission.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', cursor: 'pointer', height: '100%', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-8px)' } }} onClick={() => setActiveTab('donate')}>
              <CardContent>
                <MonetizationOnIcon sx={{ fontSize: 64, color: '#FF9800', mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 1 }}>Donate</Typography>
                <Typography variant="body2" color="text.secondary">
                  Contribute financially to support our programs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', cursor: 'pointer', height: '100%', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-8px)' } }} onClick={() => setActiveTab('partner')}>
              <CardContent>
                <BusinessIcon sx={{ fontSize: 64, color: '#4CAF50', mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 1 }}>Partner</Typography>
                <Typography variant="body2" color="text.secondary">
                  Collaborate with us for mutual beneficial initiatives.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Volunteer Opportunities */}
        {activeTab === 'volunteer' && (
          <>
            <Typography variant="h2" sx={{ mb: 6 }}>
              Volunteer Opportunities
            </Typography>
            <Grid container spacing={4} sx={{ mb: 8 }}>
              {volunteerOpportunities.map((opp, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography variant="h3" sx={{ mb: 2 }}>{opp.icon}</Typography>
                      <Typography variant="h6" sx={{ mb: 1, color: '#2E5090' }}>
                        {opp.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {opp.description}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#FF9800', fontWeight: 600 }}>
                        {opp.volunteers} active volunteers
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Volunteer Form */}
            <Card sx={{ mb: 8 }}>
              <CardContent>
                <Typography variant="h3" sx={{ mb: 4 }}>
                  Register as a Volunteer
                </Typography>
                {submitted && <Alert severity="success" sx={{ mb: 3 }}>Thank you for registering! We'll contact you soon.</Alert>}
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Volunteer Type</InputLabel>
                        <Select
                          name="volunteerType"
                          value={formData.volunteerType}
                          onChange={handleInputChange}
                          label="Volunteer Type"
                        >
                          <MenuItem value="onsite">On-site Volunteer</MenuItem>
                          <MenuItem value="remote">Remote Volunteer</MenuItem>
                          <MenuItem value="hybrid">Hybrid</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                          Areas of Interest
                        </Typography>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox name="education" onChange={handleCheckboxChange} />}
                            label="Education Support"
                          />
                          <FormControlLabel
                            control={<Checkbox name="health" onChange={handleCheckboxChange} />}
                            label="Health Programs"
                          />
                          <FormControlLabel
                            control={<Checkbox name="events" onChange={handleCheckboxChange} />}
                            label="Event Organization"
                          />
                          <FormControlLabel
                            control={<Checkbox name="community" onChange={handleCheckboxChange} />}
                            label="Community Service"
                          />
                          <FormControlLabel
                            control={<Checkbox name="digital" onChange={handleCheckboxChange} />}
                            label="Digital Support"
                          />
                        </FormGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Availability</InputLabel>
                        <Select
                          name="availability"
                          value={formData.availability}
                          onChange={handleInputChange}
                          label="Availability"
                        >
                          <MenuItem value="fulltime">Full-time</MenuItem>
                          <MenuItem value="parttime">Part-time</MenuItem>
                          <MenuItem value="weekends">Weekends Only</MenuItem>
                          <MenuItem value="flexible">Flexible</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Message / Additional Information"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<SendIcon />}
                      >
                        Register as Volunteer
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </>
        )}

        {/* Donation Section */}
        {activeTab === 'donate' && (
          <>
            <Typography variant="h2" sx={{ mb: 6 }}>
              Support Us Through Donations
            </Typography>
            <Card sx={{ mb: 8 }}>
              <CardContent>
                <Typography variant="h3" sx={{ mb: 4 }}>
                  Make a Donation
                </Typography>
                {submitted && <Alert severity="success" sx={{ mb: 3 }}>Thank you for your generosity!</Alert>}
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                          Donation Type
                        </Typography>
                        <RadioGroup
                          row
                          name="donationType"
                          value={formData.donationType}
                          onChange={handleInputChange}
                        >
                          <FormControlLabel value="onetime" control={<Radio />} label="One-time" />
                          <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
                          <FormControlLabel value="quarterly" control={<Radio />} label="Quarterly" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                        Donation Amount
                      </Typography>
                      <Grid container spacing={2}>
                        {[100, 500, 1000, 5000].map(amount => (
                          <Grid item xs={6} sm={3} key={amount}>
                            <Button
                              fullWidth
                              variant={formData.donationAmount === amount.toString() ? 'contained' : 'outlined'}
                              color="primary"
                              onClick={() => setFormData({ ...formData, donationAmount: amount.toString() })}
                            >
                              ₹{amount}
                            </Button>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Custom Amount (₹)"
                        name="donationAmount"
                        type="number"
                        value={formData.donationAmount}
                        onChange={handleInputChange}
                        placeholder="Enter custom amount"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Message (Optional)"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                          <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            endIcon={<SendIcon />}
                            onClick={() => setDonateModalOpen(true)}
                          >
                            Proceed to Payment
                          </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </>
        )}

        {/* Partnership Section */}
        {activeTab === 'partner' && (
          <>
            <Typography variant="h2" sx={{ mb: 6 }}>
              Partner With Us
            </Typography>
            <Card sx={{ mb: 8 }}>
              <CardContent>
                <Typography variant="h3" sx={{ mb: 4 }}>
                  Business Partnership Form
                </Typography>
                {submitted && <Alert severity="success" sx={{ mb: 3 }}>We'll review your proposal and contact you shortly.</Alert>}
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Business Name"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Contact Person Name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={6}
                        label="Partnership Proposal"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your partnership idea and how we can collaborate..."
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        size="large"
                        endIcon={<SendIcon />}
                      >
                        Submit Partnership Proposal
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </>
        )}
      </Container>
      <DonateModal open={donateModalOpen} onClose={() => setDonateModalOpen(false)} />
    </>
  );
};

export default GetInvolved;
