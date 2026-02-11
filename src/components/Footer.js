import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #2E5090 0%, #1B3057 100%)',
        color: 'white',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Box
            component="img"
            src="/footerLogo.png"
            alt="Dharmamma Charitable Trust"
            sx={{ height: 120, width: 'auto' }}
          />
        </Box>
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* About Section */}
          <Grid item xs={12}sm={6} md={3}>
            <Typography variant="body2" sx={{ lineHeight: 1.8, opacity: 0.9 }}>
              Dedicated to serving communities and spreading compassion through various social and religious initiatives.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" underline="none" sx={{ '&:hover': { color: '#D09704' }, transition: 'color 0.3s', color: 'white' }}>
                Home
              </Link>
              <Link href="/about" underline="none" sx={{ '&:hover': { color: '#D09704' }, transition: 'color 0.3s', color: 'white' }}>
                About Us
              </Link>
              <Link href="/services" underline="none" sx={{ '&:hover': { color: '#D09704' }, transition: 'color 0.3s', color: 'white' }}>
                Services
              </Link>
              <Link href="/events" underline="none" sx={{ '&:hover': { color: '#D09704' }, transition: 'color 0.3s', color: 'white' }}>
                Events
              </Link>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <PhoneIcon sx={{ fontSize: '1.2rem', mt: 0.2 }} />
                <Typography variant="body2">+91 8500406444</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <EmailIcon sx={{ fontSize: '1.2rem', mt: 0.2 }} />
                <Typography variant="body2">dharmammatrust@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ fontSize: '1.2rem', mt: 0.2 }} />
                <Typography variant="body2">Gonupalli, Andhra Pradesh, India</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Social Media */}
          {/* <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" color="inherit" sx={{ '&:hover': { color: '#D09704' } }}>
                <FacebookIcon />
              </Link>
              <Link href="#" color="inherit" sx={{ '&:hover': { color: '#D09704' } }}>
                <TwitterIcon />
              </Link>
              <Link href="#" color="inherit" sx={{ '&:hover': { color: '#D09704' } }}>
                <InstagramIcon />
              </Link>
              <Link href="#" color="inherit" sx={{ '&:hover': { color: '#D09704' } }}>
                <LinkedInIcon />
              </Link>
            </Box>
          </Grid> */}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          {/* <Button variant="contained" color="secondary" onClick={() => setDonateOpen(true)} sx={{ fontWeight: 700 }}>Donate</Button> */}
        </Box>

        <Divider sx={{ bg: 'rgba(255,255,255,0.1)', my: 3 }} />

        {/* <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} /> */}

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} Dharmamma Charitable Trust. All rights reserved. |
            <Link href="/privacy" color="inherit" sx={{ ml: 1, '&:hover': { color: '#D09704' } }}>
              Privacy Policy
            </Link>
            {' | '}
            <Link href="/terms" color="inherit" sx={{ '&:hover': { color: '#D09704' } }}>
              Terms & Conditions
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
