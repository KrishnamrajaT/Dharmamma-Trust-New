import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StorageIcon from '@mui/icons-material/Storage';
import PublicIcon from '@mui/icons-material/Public';
import baluTreasurer from '../assets/baluTreasurer.jpeg';
import ammaChairman from '../assets/chairma_amma.jpeg';

const About = () => {
  const teamMembers = [
    {
      name: 'Founder & Chairman',
      role: 'Leadership',
      initials: 'FC',
      description: 'Visionary leader dedicated to community service',
    },
    {
      name: 'Vice Chairman',
      role: 'Operations',
      initials: 'VC',
      image: ammaChairman,
      description: 'Oversees day-to-day operations and initiatives',
    },
    {
      name: 'Secretary',
      role: 'Administration',
      initials: 'SE',
      description: 'Manages administrative functions and records',
    },
    {
      name: 'Treasurer',
      role: 'Finance',
      initials: 'TR',
      image: baluTreasurer,
      description: 'Manages financial resources and transparency',
    },
    {
      name: 'Volunteer Coordinator',
      role: 'Community',
      initials: 'VC',
      description: 'Coordinates volunteer activities and engagement',
    },
    {
      name: 'Events Manager',
      role: 'Events',
      initials: 'EM',
      description: 'Plans and executes all trust events',
    },
  ];

  const coreValues = [
    {
      icon: <EmojiPeopleIcon sx={{ fontSize: 40, color: '#2E5090' }} />,
      title: 'Compassion',
      description: 'We approach every action with empathy and understanding for those we serve.',
    },
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 40, color: '#2E5090' }} />,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and true accountability in our work.',
    },
    {
      icon: <StorageIcon sx={{ fontSize: 40, color: '#2E5090' }} />,
      title: 'Sustainability',
      description: 'We build initiatives that create lasting positive impact in communities.',
    },
    {
      icon: <PublicIcon sx={{ fontSize: 40, color: '#2E5090' }} />,
      title: 'Inclusivity',
      description: 'We welcome and respect people from all backgrounds and beliefs equally.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Dharmamma Charitable Trust - History, Mission & Team</title>
        <meta name="description" content="Learn about Dharmamma Charitable Trust's history, mission, vision, core values, and dedicated team committed to serving communities." />
        <meta name="keywords" content="about trust, mission, vision, core values, team, history" />
        <meta property="og:title" content="About Dharmamma Charitable Trust" />
        <meta property="og:description" content="History, mission, and team of Dharmamma Charitable Trust" />
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
            About Dharmamma Charitable Trust
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95, mt: 2 }}>
            Our Story, Values, and Commitment to Service
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* History Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 4 }}>
            Our History
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            Dharmamma Charitable Trust was established with a vision to serve communities through religious and social initiatives. Over the years, we have grown from a small group of dedicated individuals to a well-established organization with hundreds of volunteers and thousands of beneficiaries.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            Our journey is rooted in the principles of dharma (righteousness) and compassion. We have consistently worked towards uplifting underprivileged sections of society, providing educational support, organizing spiritual events, and creating safe spaces for pilgrims and visitors.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Today, Dharmamma Charitable Trust stands as a beacon of hope and service in our communities, touching the lives of thousands of people every year through our various programs and initiatives.
          </Typography>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Core Values */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
            Our Core Values
          </Typography>
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {coreValues.map((value, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card sx={{ minWidth: { xs: "250px", md: "560px" } }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>
                      {value.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 1, color: '#2E5090' }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Goals Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 4 }}>
            Our Goals
          </Typography>
          <Grid container display={"flex"} justifyContent={"space-around"} spacing={3}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h5" sx={{ color: '#2E5090', mb: 2 }}>
                  Short-term Goals
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  • Expand our uniform distribution program to reach 10,000 more children<br />
                  • Organize 50 more community events per year<br />
                  • Increase pilgrim accommodation capacity<br />
                  • Recruit and train 200 new volunteers
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h5" sx={{ color: '#2E5090', mb: 2 }}>
                  Long-term Vision
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  • Establish trust centers in 5+ cities<br />
                  • Create scholarship programs for underprivileged students<br />
                  • Develop sustainable community development projects<br />
                  • Build a self-sufficient eco-friendly complex
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Team Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
            Our Dedicated Team
          </Typography>
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ minWidth: { xs: "365px", md: "362px" } }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        margin: '0 auto 1rem',
                        background: 'linear-gradient(135deg, #2E5090 0%, #D09704 100%)',
                        fontSize: '1.5rem',
                      }}
                      src={member.image}
                      alt={member.name}
                    >
                      {member.initials}
                    </Avatar>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#D09704', fontWeight: 600, mb: 1 }}>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default About;
