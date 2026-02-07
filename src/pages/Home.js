import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import HotelIcon from '@mui/icons-material/Hotel';
import EventIcon from '@mui/icons-material/Event';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
  const services = [
    {
      icon: <SchoolIcon sx={{ fontSize: 48, color: '#2E5090' }} />,
      title: 'Uniforms for Children',
      description: 'We provide school uniforms to underprivileged children, ensuring they can attend school with dignity and confidence.',
      link: '/services',
    },
    {
      icon: <HotelIcon sx={{ fontSize: 48, color: '#2E5090' }} />,
      title: 'Pilgrim Accommodations',
      description: 'Comfortable and affordable accommodation facilities for pilgrims and visitors during religious journeys and festivals.',
      link: '/services',
    },
    {
      icon: <EventIcon sx={{ fontSize: 48, color: '#2E5090' }} />,
      title: 'Event Organization',
      description: 'We organize religious and community events that bring people together and foster spiritual growth and cultural values.',
      link: '/events',
    },
    {
      icon: <VolunteerActivismIcon sx={{ fontSize: 48, color: '#2E5090' }} />,
      title: 'Community Service',
      description: 'Various social initiatives aimed at improving the quality of life and well-being of people in the community.',
      link: '/get-involved',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Dharmamma Trust - Community Service & Religious Initiatives</title>
        <meta name="description" content="Dharmamma Trust is dedicated to serving communities through religious and social initiatives including education support, pilgrim accommodations, and event organization." />
        <meta name="keywords" content="trust, religious service, community service, education, accommodations, events" />
        <meta property="og:title" content="Dharmamma Trust - Community Service" />
        <meta property="og:description" content="Serving communities through religious and social initiatives" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2E5090 0%, #1B3057 100%)',
          color: 'white',
          py: 10,
          textAlign: 'center',
          mb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, fontWeight: 700, mb: 3, color:"white" }}>
            Welcome to Dharmamma Trust
          </Typography>
          <Typography variant="h5" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 4, opacity: 0.95 }}>
            Serving Communities with Compassion and Dedication
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={RouterLink}
              to="/about"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ fontWeight: 600 }}
            >
              Learn More About Us
            </Button>
            <Button
              component={RouterLink}
              to="/get-involved"
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ fontWeight: 600, border: '2px solid white' }}
            >
              Get Involved
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                At Dharmamma Trust, our mission is to serve humanity through various social, religious, and cultural initiatives. We believe in the power of compassion and community service to create a positive impact on society. We strive to uplift underprivileged sections of society and promote spiritual growth through our diverse programs and initiatives.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                We envision a society where compassion, respect, and service are valued above all else. Our vision is to create a world where everyone has equal access to resources, opportunities, and spiritual guidance. We aim to be a beacon of hope and a catalyst for positive change in the communities we serve.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Key Services */}
      <Box sx={{ background: '#F5F5F5', py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
            Our Key Services & Initiatives
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 1, color: '#2E5090' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ mt: 'auto', justifyContent: 'center' }}>
                    <Button
                      component={RouterLink}
                      to={service.link}
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Impact Numbers */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
          Our Impact
        </Typography>
        <Grid container spacing={4} sx={{ textAlign: 'center' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h3" sx={{ color: '#FF9800', fontWeight: 700, mb: 1 }}>
              5000+
            </Typography>
            <Typography variant="body1">
              Children Supported
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h3" sx={{ color: '#FF9800', fontWeight: 700, mb: 1 }}>
              150+
            </Typography>
            <Typography variant="body1">
              Events Organized
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h3" sx={{ color: '#FF9800', fontWeight: 700, mb: 1 }}>
              10000+
            </Typography>
            <Typography variant="body1">
              Pilgrims Served
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h3" sx={{ color: '#FF9800', fontWeight: 700, mb: 1 }}>
              500+
            </Typography>
            <Typography variant="body1">
              Active Volunteers
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
            Be Part of Our Mission
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
            Join thousands of volunteers and donors who are making a difference in our communities.
          </Typography>
          <Button
            component={RouterLink}
            to="/get-involved"
            variant="contained"
            color="primary"
            size="large"
            sx={{ fontWeight: 600 }}
          >
            Get Involved Today
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Home;
