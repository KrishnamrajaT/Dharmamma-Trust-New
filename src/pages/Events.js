import React, { useState } from 'react';
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
  Tab,
  Tabs,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ImageList,
  ImageListItem,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const Events = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openGallery, setOpenGallery] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Diwali Celebration 2024',
      date: 'October 31, 2024',
      time: '6:00 PM - 10:00 PM',
      location: 'Community Center, Main Street',
      category: 'Festival',
      // description: 'Join us for a grand Diwali celebration with traditional performances, decorations, and special meals.',
      attendees: '2000+',
      image: '🪔',
    },
    {
      id: 2,
      title: 'Uniform Distribution Drive',
      date: 'November 15, 2024',
      time: '9:00 AM - 2:00 PM',
      location: 'Government School, East Ward',
      category: 'Community Service',
      // description: 'Distribution of school uniforms to 500 underprivileged students. Registration required.',
      attendees: '500+',
      image: '👕',
    },
    {
      id: 3,
      title: 'Health Camp',
      date: 'November 22, 2024',
      time: '8:00 AM - 5:00 PM',
      location: 'Community Hall, West End',
      category: 'Health & Wellness',
      // description: 'Free health check-ups, consultation, and awareness sessions with experienced doctors.',
      attendees: '300+',
      image: '⚕️',
    },
    
  ];

  const pastEvents = [
    {
      title: 'Holi Festival 2024',
      date: 'March 25, 2024',
      location: 'Community Park',
      attendees: '1500+',
      photos: 4,
      testimonials: [
        'Amazing event! The vibe was amazing. - Priya M.'
      ],
    },
    {
      title: 'Uniform Distribution - Spring 2024',
      date: 'April 10, 2024',
      location: 'Multiple Schools',
      attendees: '2000+ children',
      photos: 8,
      testimonials: [
        'My child is so happy with her new uniform! - Mrs. Sharma'
      ],
    },
    {
      title: 'Navratri Celebration',
      date: 'October 3-12, 2024',
      location: 'Cultural Center',
      attendees: '3000+',
      photos: 12,
      testimonials: [
        'Best Navratri celebration ever! - Rajesh K.'
      ],
    },
    {
      title: 'Summer Health Camp 2024',
      date: 'June 15, 2024',
      location: 'East Wing Community Center',
      attendees: '400+',
      photos: 6,
      testimonials: [
        'Great medical expertise and care. - Dr. Anil Kumar'
      ],
    },  {
      title: 'Summer Health Camp 2024',
      date: 'June 15, 2024',
      location: 'East Wing Community Center',
      attendees: '400+',
      photos: 6,
      testimonials: [
        'Great medical expertise and care. - Dr. Anil Kumar'
      ],
    },  {
      title: 'Summer Health Camp 2024',
      date: 'June 15, 2024',
      location: 'East Wing Community Center',
      attendees: '400+',
      photos: 6,
      testimonials: [
        'Great medical expertise and care. - Dr. Anil Kumar'
      ],
    },
  ];

  const handleOpenGallery = (event) => {
    setSelectedEvent(event);
    setOpenGallery(true);
  };

  const handleCloseGallery = () => {
    setOpenGallery(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <Helmet>
        <title>Events & Activities - Dharmamma Charitable Trust</title>
        <meta name="description" content="Explore Dharmamma Charitable Trust's upcoming events, festivals, community activities, and past event galleries." />
        <meta name="keywords" content="events, festivals, community activities, calendar, activities" />
        <meta property="og:title" content="Events & Activities - Dharmamma Charitable Trust" />
        <meta property="og:description" content="Upcoming events, festivals, and community activities" />
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
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700,color:"white"}}>
            Events & Activities
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95, mt: 2 }}>
            Calendar of Upcoming Events and Past Celebrations
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs value={tabValue} onChange={(e, value) => setTabValue(value)}>
            <Tab label="Upcoming Events" />
            <Tab label="Past Events" />
          </Tabs>
        </Box>

        {/* Upcoming Events Tab */}
        {tabValue === 0 && (
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 4 }}>
              Upcoming Events
            </Typography>
            <Grid container spacing={4}>
              {upcomingEvents.map((event) => (
                <Grid item xs={12} md={6} key={event.id}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', minWidth: "362px" }}>
                    <CardContent>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={event.category}
                          color="primary"
                          size="small"
                          sx={{ mb: 1 }}
                        />
                      </Box>
                      <Typography variant="h5" sx={{ color: '#2E5090', mb: 2 }}>
                        {event.image} {event.title}
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 2 }}>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                          <EventIcon sx={{ color: '#FF9800', fontSize: '1.3rem' }} />
                          <Typography variant="body2">{event.date}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                          <AccessTimeIcon sx={{ color: '#FF9800', fontSize: '1.3rem' }} />
                          <Typography variant="body2">{event.time}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                          <LocationOnIcon sx={{ color: '#FF9800', fontSize: '1.3rem' }} />
                          <Typography variant="body2">{event.location}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                          <GroupIcon sx={{ color: '#FF9800', fontSize: '1.3rem' }} />
                          <Typography variant="body2">Expected: {event.attendees}</Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                        {event.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ mt: 'auto' }}>
                      <Button color="primary">Register</Button>
                      <Button color="secondary">Share</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Past Events Tab */}
        {tabValue === 1 && (
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 4 }}>
              Past Events & Celebrations
            </Typography>
            <Grid container spacing={4}>
              {pastEvents.map((event, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ minWidth: "345px" }}>
                    <CardContent>
                      <Typography variant="h5" sx={{ color: '#2E5090', mb: 1 }}>
                        {event.title}
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          📅 {event.date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          📍 {event.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          👥 {event.attendees}
                        </Typography>
                      </Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#2E5090', mb: 1 }}>
                        Highlights:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.testimonials[0]}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        color="primary"
                        startIcon={<PhotoLibraryIcon />}
                        onClick={() => handleOpenGallery(event)}
                      >
                        View Gallery ({event.photos} photos)
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>

      {/* Gallery Dialog */}
      <Dialog open={openGallery} onClose={handleCloseGallery} fullWidth maxWidth="md">
        <DialogTitle>
          {selectedEvent?.title} - Photo Gallery
        </DialogTitle>
        <DialogContent>
          <>
            {selectedEvent && (
              <>
                <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                  📅 {selectedEvent.date} | 📍 {selectedEvent.location}
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                  "{selectedEvent.testimonials[0]}"
                </Typography>
                <ImageList cols={2} gap={8}>
                  {Array.from({ length: selectedEvent.photos }).map((_, i) => (
                    <ImageListItem key={i}>
                      <Box
                        sx={{
                          width: '100%',
                          paddingBottom: '100%',
                          position: 'relative',
                          background: 'linear-gradient(135deg, #2E5090 0%, #FF9800 100%)',
                          borderRadius: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '3rem',
                        }}
                      >
                        📸
                      </Box>
                    </ImageListItem>
                  ))}
                </ImageList>
              </>
            )}
          </>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseGallery}>Close</Button>
          <Button color="primary">Download Album</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Events;
