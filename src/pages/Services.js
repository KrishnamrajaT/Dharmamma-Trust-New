import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import HotelIcon from '@mui/icons-material/Hotel';
import EventIcon from '@mui/icons-material/Event';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = location.hash.replace('#', '');
    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const timeoutId = setTimeout(scrollToTarget, 0);
    return () => clearTimeout(timeoutId);
  }, [location.hash]);

  const mainServices = [
    {
      id: 'uniform-distribution',
      icon: <SchoolIcon sx={{ fontSize: 56, color: '#2E5090' }} />,
      title: 'Uniform Distribution',
      description: 'We provide quality school uniforms to economically disadvantaged children, ensuring they can attend school with pride.',
      details: 'Our uniform distribution program targets schools in underserved areas. Each uniform is selected with care to ensure durability and comfort. We currently support 5,000+ children annually and aim to expand to 15,000+ in the coming years.',
      benefits: ['Free uniform sets', 'Seasonal replacements', 'Quality assurance', 'Easy distribution process'],
    },
    {
      id: 'pilgrim-accommodations',
      icon: <HotelIcon sx={{ fontSize: 56, color: '#2E5090' }} />,
      title: 'Pilgrim Accommodations',
      description: 'Comfortable, affordable, and clean accommodation facilities for pilgrims visiting religious sites.',
      details: 'We operate modern guest houses and dormitories near major pilgrimage centers. Our facilities are designed to provide a comfortable stay with all essential amenities while maintaining affordability for all pilgrims.',
      benefits: ['Clean facilities', 'Vegetarian meals', '24/7 security', 'Prayer spaces'],
    },
    {
      id: 'meal-distribution',
      icon: <LocalDiningIcon sx={{ fontSize: 56, color: '#2E5090' }} />,
      title: 'Meal & Food Distribution',
      description: 'Providing nutritious meals to those in need during festivals and year-round.',
      details: 'We operate community kitchens during major festivals and run a year-round meal distribution program. All meals are prepared with care using quality ingredients and follow dietary guidelines.',
      benefits: ['Nutritious meals', 'Vegetarian options', 'Hygienic preparation', 'Community kitchen model'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Dharmamma Charitable Trust</title>
        <meta name="description" content="Explore Dharmamma Charitable Trust's comprehensive services including uniform distribution, pilgrim accommodations, event organization, health programs, educational support, and meal distribution." />
        <meta name="keywords" content="services, uniforms, accommodations, events, health programs, education, charity" />
        <meta property="og:title" content="Our Services - Dharmamma Charitable Trust" />
        <meta property="og:description" content="Comprehensive service offerings for community welfare" />
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
            Our Services
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95, mt: 2 }}>
            Comprehensive Programs Serving Communities
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Main Services */}
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
          Our Service Offerings
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {mainServices.map((service, index) => (
            <Grid item xs={12} md={6} key={index} id={service.id} sx={{ scrollMarginTop: 96 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Box>{service.icon}</Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ color: '#2E5090', mb: 1 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {service.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                    {service.details}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#2E5090', mb: 1 }}>
                    Key Benefits:
                  </Typography>
                  <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem' }}>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <Typography variant="body2">{benefit}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardActions sx={{ mt: 'auto' }}>
                  {/* <Button color="primary" size="small">
                    Learn More
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* How to Access */}
        {/* <Box sx={{ background: '#F5F5F5', p: 4, borderRadius: 2, mb: 8 }}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            How to Access Our Services
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="h6" sx={{ color: '#D09704', fontWeight: 700, mb: 1 }}>
                  Step 1: Contact
                </Typography>
                <Typography variant="body2">
                  Reach out to us via phone, email, or visit our office to inquire about services.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="h6" sx={{ color: '#D09704', fontWeight: 700, mb: 1 }}>
                  Step 2: Verify
                </Typography>
                <Typography variant="body2">
                  Our team will verify your eligibility and requirements based on the service.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="h6" sx={{ color: '#D09704', fontWeight: 700, mb: 1 }}>
                  Step 3: Register
                </Typography>
                <Typography variant="body2">
                  Complete the registration process with necessary documentation.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="h6" sx={{ color: '#D09704', fontWeight: 700, mb: 1 }}>
                  Step 4: Benefit
                </Typography>
                <Typography variant="body2">
                  Start receiving our services. We'll provide ongoing support as needed.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box> */}

        {/* FAQs */}
        {/* <Box sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 4 }}>
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 600 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box> */}
      </Container>
    </>
  );
};

export default Services;
