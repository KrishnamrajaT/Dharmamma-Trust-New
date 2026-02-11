import React, { useEffect, useRef, useState } from 'react';
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
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import HotelIcon from '@mui/icons-material/Hotel';
import EventIcon from '@mui/icons-material/Event';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import carouselPic1 from '../assets/carouselPic1.jpeg';
import carouselPic2 from '../assets/carouselPic2.jpeg';
import carouselPic2Large from '../assets/carouselPic2.1.jpeg';
import carouselPic3 from '../assets/carouselPic3.jpeg';
import carouselPic4 from '../assets/carouselPic4.jpeg';
import carouselPic5 from '../assets/carouselPic5.jpeg';

const Home = () => {
  const slidesPerView = 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
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
    
  ];

  const donationPhotos = [
    { src: carouselPic1, title: 'Community Outreach' },
    { src: isMdUp ? carouselPic2Large : carouselPic2, title: 'Volunteer Support' },
    { src: carouselPic3, title: 'Community Gathering' },
    { src: carouselPic4, title: 'Health Initiative' },
    { src: carouselPic5, title: 'Education Support' },
  ];
  const carouselSlides = [{ type: 'hero' }, ...donationPhotos];

  const maxIndex = Math.max(0, carouselSlides.length - slidesPerView);
  const gapPx = 24;
  const slideBasis = `calc((100% - ${(slidesPerView - 1) * gapPx}px) / ${slidesPerView})`;

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    if (isPaused) {
      return () => {};
    }
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [maxIndex, isPaused]);

  return (
    <>
      <Helmet>
        <title>Dharmamma Charitable Trust - Community Service & Religious Initiatives</title>
        <meta name="description" content="Dharmamma Charitable Trust is dedicated to serving communities through religious and social initiatives including education support, pilgrim accommodations, and event organization." />
        <meta name="keywords" content="trust, religious service, community service, education, accommodations, events" />
        <meta property="og:title" content="Dharmamma Charitable Trust - Community Service" />
        <meta property="og:description" content="Serving communities through religious and social initiatives" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero + Donation Carousel */}
      <Box sx={{ background: '#F5F5F5',mt:2,mb:5}}>
        <Container>
          <Box
            sx={{ position: 'relative' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Box sx={{ overflow: 'hidden' }}>
              <Box
                sx={{
                  display: 'flex',
                  gap: `${gapPx}px`,
                  transform: `translateX(calc(-${currentIndex} * (${slideBasis} + ${gapPx}px)))`,
                  transition: 'transform 0.5s ease',
                }}
              >
                {carouselSlides.map((slide) => (
                  <Box
                    key={slide.type === 'hero' ? 'hero' : slide.src}
                    sx={{
                      flex: `0 0 ${slideBasis}`,
                      borderRadius: 2,
                      overflow: 'hidden',
                      border: '1px solid rgba(0,0,0,0.08)',
                      background: 'white',
                      boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                      height: { xs: 320, md: 400, lg: 400 },
                    }}
                  >
                    {slide.type === 'hero' ? (
                      <Box
                        sx={{
                          background: 'linear-gradient(135deg, #2E5090 0%, #1B3057 100%)',
                          color: 'white',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          
                        }}
                      >
                        <Box>
                          <Typography variant="h1" sx={{ fontSize: { xs: '1.8rem', md: '3.2rem' }, fontWeight: 700, mb: 2, color: 'white' }}>
                            Welcome to Dharmamma Charitable Trust
                          </Typography>
                          <Typography variant="h5" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 3, opacity: 0.95 }}>
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
                        </Box>
                      </Box>
                    ) : (
                      <Box
                        component="img"
                        src={slide.src}
                        alt={slide.title}
                        sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    )}
                  </Box>
                ))}
              </Box>
            </Box>

            <IconButton
              aria-label="previous"
              onClick={() => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))}
              sx={{
                position: 'absolute',
                top: '50%',
                left: { xs: -6, sm: -12 },
                transform: 'translateY(-50%)',
                background: 'white',
                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                '&:hover': { background: '#fff7e0' },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              aria-label="next"
              onClick={() => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))}
              sx={{
                position: 'absolute',
                top: '50%',
                right: { xs: -6, sm: -12 },
                transform: 'translateY(-50%)',
                background: 'white',
                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                '&:hover': { background: '#fff7e0' },
              }}
            >
              <ChevronRightIcon />
            </IconButton>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.2, mt: 3 }}>
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    cursor: 'pointer',
                    background: index === currentIndex ? '#D09704' : 'rgba(0,0,0,0.25)',
                    transition: 'background 0.3s ease',
                  }}
                />
              ))}
            </Box>

            <Typography
              variant="body2"
              sx={{ textAlign: 'center', mt: 1.5, color: 'text.secondary' }}
            >
              Tip: Hover over the carousel to pause and take your time viewing each photo.
            </Typography>
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
                At Dharmamma Charitable Trust, our mission is to serve humanity through various social, religious, and cultural initiatives. We believe in the power of compassion and community service to create a positive impact on society. We strive to uplift underprivileged sections of society and promote spiritual growth through our diverse programs and initiatives.
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
      <Box sx={{ background: '#F5F5F5', mb: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
            Our Key Services & Initiatives
          </Typography>
                    <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', minWidth: 240, maxWidth: 320, width: '100%' }}>
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
        <Container maxWidth="md" sx={{ mb: 8 }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
          Our Impact
        </Typography>
                <Grid container spacing={4} sx={{ textAlign: 'center', justifyContent: 'center' }}>
          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ minWidth: 160 }}>
              <Typography variant="h3" sx={{ color: '#D09704', fontWeight: 700, mb: 1 }}>
                5000+
              </Typography>
              <Typography variant="body1">Children Supported</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ minWidth: 160 }}>
              <Typography variant="h3" sx={{ color: '#D09704', fontWeight: 700, mb: 1 }}>
                150+
              </Typography>
              <Typography variant="body1">Events Organized</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ minWidth: 160 }}>
              <Typography variant="h3" sx={{ color: '#D09704', fontWeight: 700, mb: 1 }}>
                10000+
              </Typography>
              <Typography variant="body1">Pilgrims Served</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ minWidth: 160 }}>
              <Typography variant="h3" sx={{ color: '#D09704', fontWeight: 700, mb: 1 }}>
                500+
              </Typography>
              <Typography variant="body1">Active Volunteers</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #D09704 0%, #9E7815 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
          marginBottom:7
        }}
      >
        <Container maxWidth="md" sx={{mb:4}}>
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
