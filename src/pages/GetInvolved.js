import  { useState } from 'react';
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
  Alert,
 
} from '@mui/material';
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


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

 

  return (
    <>
      <Helmet>
        <title>Get Involved - Dharmamma Charitable Trust</title>
        <meta name="description" content="Join Dharmamma Charitable Trust as a volunteer or donor. Learn how you can contribute to our mission of community service." />
        <meta name="keywords" content="volunteer, donate, partnership, get involved, contribute" />
        <meta property="og:title" content="Get Involved - Dharmamma Charitable Trust" />
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
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, color: "white" }}>
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

        <Grid container spacing={{ xs: 4, md: "64px" }} sx={{ mb: 8 }}>
          {/* <Grid item xs={12} md={4} sx={{ minWidth: { md: '300px' } }}>
            <Card sx={{ textAlign: 'center', cursor: 'pointer', height: '100%', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-8px)' } }} onClick={() => setActiveTab('volunteer')}>
              <CardContent>
                <VolunteerActivismIcon sx={{ fontSize: 64, color: '#2E5090', mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 1 }}>Volunteer</Typography>
                <Typography variant="body2" color="text.secondary">
                  Dedicate your time and skills to help our mission.
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}
          <Grid item xs={12} md={4} sx={{ minWidth: { xs: "355px", md: "313px" } }}>
            <Card sx={{ textAlign: 'center', cursor: 'pointer', height: '100%', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-8px)' } }} onClick={() => { setActiveTab('donate'); setDonateModalOpen(true); }}>
              <CardContent>
                <MonetizationOnIcon sx={{ fontSize: 64, color: '#FF9800', mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 1 }}>Donate</Typography>
                <Typography variant="body2" color="text.secondary">
                  Contribute financially to support our programs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sx={{ minWidth: { xs: "340px", md: "313px" } }}>
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
      <DonateModal 
        open={donateModalOpen} 
        onClose={() => setDonateModalOpen(false)} 
        amount={parseInt(formData.donationAmount) || 0}
        donorName={formData.name}
        donorEmail={formData.email}
        donorPhone={formData.phone}
      />
    </>
  );
};

export default GetInvolved;
