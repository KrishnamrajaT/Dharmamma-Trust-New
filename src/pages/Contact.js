import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import MapIcon from '@mui/icons-material/Map';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openMap, setOpenMap] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Dharmamma Trust</title>
        <meta name="description" content="Get in touch with Dharmamma Trust. Find our contact details, office locations, and send us a message." />
        <meta name="keywords" content="contact, location, phone, email, inquiry" />
        <meta property="og:title" content="Contact Us - Dharmamma Trust" />
        <meta property="og:description" content="Contact information and inquiry form" />
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
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95, mt: 2 }}>
            We'd Love to Hear From You
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 4 }}>
              Get in Touch
            </Typography>

            {/* Main Office */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#2E5090', mb: 2, fontWeight: 700 }}>
                  Main Office
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <LocationOnIcon sx={{ color: '#FF9800', mt: 0.5 }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Dharmamma Trust Headquarters
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      123 Religious Street<br />
                      Spiritual City, State 123456<br />
                      Country
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#2E5090', mb: 2, fontWeight: 700 }}>
                  Contact Information
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <PhoneIcon sx={{ color: '#FF9800', mt: 0.5 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Primary: +91 (XXX) XXX-XXXX
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Support: +91 (XXX) XXX-XXXX
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <EmailIcon sx={{ color: '#FF9800', mt: 0.5 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      General: contact@dharmamma.org
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Donations: donate@dharmamma.org
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Volunteering: volunteer@dharmamma.org
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#2E5090', mb: 2, fontWeight: 700 }}>
                  Office Hours
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                </Typography>
                <Typography variant="body2">
                  <strong>Sunday & Holidays:</strong> Closed
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h3" sx={{ mb: 4 }}>
                  Send us a Message
                </Typography>

                {submitted && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you for your message! We'll get back to you within 24-48 hours.
                  </Alert>
                )}

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
                        variant="outlined"
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
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        endIcon={<SendIcon />}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" sx={{ mb: 4 }}>
            Our Location
          </Typography>
          <Card>
            <CardContent>
              <Box
                sx={{
                  width: '100%',
                  height: 400,
                  background: 'linear-gradient(135deg, #E5E5E5 0%, #FFFFFF 100%)',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <MapIcon sx={{ fontSize: 80, color: '#2E5090', opacity: 0.3 }} />
                <Typography variant="h6" color="text.secondary">
                  Interactive Map
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setOpenMap(true)}
                >
                  View on Google Maps
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Additional Offices */}
        {/* <Box sx={{ mt: 8, mb: 8 }}>
          <Typography variant="h3" sx={{ mb: 4 }}>
            Branch Offices
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#2E5090', mb: 2 }}>
                    North Branch
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📍 456 North Avenue, North City, State 123456<br/>
                    📞 +91 (XXX) XXX-XXXX<br/>
                    📧 north@dharmamma.org
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#2E5090', mb: 2 }}>
                    South Branch
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📍 789 South Road, South City, State 456789<br/>
                    📞 +91 (XXX) XXX-XXXX<br/>
                    📧 south@dharmamma.org
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#2E5090', mb: 2 }}>
                    East Branch
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📍 321 East Lane, East City, State 789012<br/>
                    📞 +91 (XXX) XXX-XXXX<br/>
                    📧 east@dharmamma.org
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box> */}
      </Container>

      {/* Map Dialog */}
      <Dialog open={openMap} onClose={() => setOpenMap(false)} fullWidth maxWidth="lg">
        <DialogTitle>Our Location</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              width: '100%',
              height: 500,
              background: 'linear-gradient(135deg, #E5E5E5 0%, #FFFFFF 100%)',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 2,
            }}
          >
            <Typography color="text.secondary">
              [Google Maps would be embedded here]
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenMap(false)}>Close</Button>
          <Button color="primary" href="https://maps.google.com" target="_blank">
            Open in Google Maps
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Contact;
