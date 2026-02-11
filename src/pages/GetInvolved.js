import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  TextField,
  Tabs,
  Tab,
  Stack,
  Checkbox,
  FormControlLabel,
  Link,
} from '@mui/material';

const amountOptions = [2000, 5000, 10000];

const GetInvolved = () => {
  const [citizenshipTab, setCitizenshipTab] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [donor, setDonor] = useState({
    name: '',
    phone: '',
    email: '',
    pan: '',
  });

  const isIndian = citizenshipTab === 0;
  const isOtherSelected = selectedAmount === 'other';
  const parsedCustomAmount = Number(customAmount);
  const donationAmount = isOtherSelected ? parsedCustomAmount : selectedAmount;
  const isAmountValid = Number.isFinite(donationAmount) && donationAmount > 0;

  const handleAmountSelect = (value) => {
    setSelectedAmount(value);
    setCustomAmount('');
  };

  const handleFieldChange = (field) => (e) => {
    setDonor((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};
    const nameValue = donor.name.trim();
    const phoneValue = donor.phone.trim();
    const emailValue = donor.email.trim();
    const panValue = donor.pan.trim();

    if (!nameValue) nextErrors.name = 'Enter your full name';
    if (!phoneValue) {
      nextErrors.phone = 'Enter your mobile number';
    } else if (!/^[0-9]{10}$/.test(phoneValue)) {
      nextErrors.phone = 'Enter a valid 10-digit mobile number';
    }
    if (!emailValue) {
      nextErrors.email = 'Enter your email address';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailValue)) {
      nextErrors.email = 'Enter a valid email address';
    }

    if (isOtherSelected) {
      if (!Number.isFinite(parsedCustomAmount) || parsedCustomAmount <= 0) {
        nextErrors.amount = 'Enter a valid donation amount';
      }
    }

    if (isIndian) {
      if (!panValue) {
        nextErrors.pan = 'PAN is required for tax benefits';
      } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(panValue.toUpperCase())) {
        nextErrors.pan = 'Enter a valid PAN (e.g. ABCDE1234F)';
      }
    } else if (panValue && !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(panValue.toUpperCase())) {
      nextErrors.pan = 'Enter a valid PAN (e.g. ABCDE1234F)';
    }

    if (!agreed) {
      nextErrors.agreed = 'Please accept the Terms and Privacy Policy';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleDonateClick = () => {
    if (!validate()) return;
    // Payment integration can be wired here.
  };

  return (
    <>
      <Helmet>
        <title>Donate - Dharmamma Charitable Trust</title>
        <meta name="description" content="Support Dharmamma Charitable Trust with your donation and help us expand community services." />
        <meta name="keywords" content="donate, donation, charity, community service" />
        <meta property="og:title" content="Donate - Dharmamma Charitable Trust" />
        <meta property="og:description" content="Make a donation to support community programs." />
      </Helmet>

      {/* Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2E5090 0%, #1B3057 100%)',
          color: 'white',
          py: 6,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, color: 'white' }}
          >
            Donate
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95, mt: 2 }}>
            Your generosity helps us serve more families and communities.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
            gap: { xs: 4, md: 6 },
            alignItems: 'flex-start',
          }}
        >
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="h2" sx={{ mb: 2, color: '#D09704' }}>
              Why Donate?
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Your support creates tangible impact for children, families, and elders in need.
              Every donation helps us provide essentials, health care, education, and community
              services that restore dignity and hope.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We focus on practical, on-the-ground programs that uplift lives and build a more
              compassionate society. Together, we can reach more people and expand these efforts.
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Your contributions make a difference through:
            </Typography>
            <Box component="ol" sx={{ pl: 3, mb: 2 }}>
              <li>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Supporting children with educational supplies and mentoring.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Empowering youth through skills training and guidance.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Strengthening women-led initiatives and self-reliance.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Caring for senior citizens with medical and daily support.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" sx={{ mb: 0 }}>
                  Providing food, shelter, and relief for the homeless.
                </Typography>
              </li>
            </Box>

            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                { label: 'Families supported', value: '10,000+' },
                { label: 'Community meals served', value: '150,000+' },
                { label: 'Students supported', value: '3,500+' },
              ].map((stat) => (
                <Grid item xs={12} sm={4} key={stat.label}>
                  <Box
                    sx={{
                      border: '1px solid rgba(208,151,4,0.35)',
                      borderRadius: 2,
                      p: 2,
                      textAlign: 'center',
                      background: 'rgba(208,151,4,0.08)',
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#1B3057' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                border: '1px solid rgba(208,151,4,0.4)',
                borderRadius: 2,
                p: 2.5,
                mb: 3,
                background: '#FFF9E8',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#1B3057' }}>
                How your donation is used
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                We allocate funds to programs with the highest community impact and urgent needs.
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                <li>
                  <Typography variant="body2">Education kits and school uniforms</Typography>
                </li>
                <li>
                  <Typography variant="body2">Medical camps and health support</Typography>
                </li>
                <li>
                  <Typography variant="body2">Food distribution and relief outreach</Typography>
                </li>
              </Box>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                Need help or have questions?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: dharmammatrust@gmail.com | Phone: +91 8500406444
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: '100%', maxWidth: 520, minWidth: { md: 420 } }}>
            <Card
              sx={{
                border: '1px solid #D09704',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              }}
            >
              <Box sx={{ background: '#FFF7E0', px: 3, py: 2, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Yes! I'd like to help
                </Typography>
              </Box>
              <Box sx={{ px: 3, py: 2.5 }}>
                <Tabs
                  value={citizenshipTab}
                  onChange={(e, newValue) => setCitizenshipTab(newValue)}
                  variant="fullWidth"
                  sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}
                >
                  <Tab label="Indian Citizen" sx={{ textTransform: 'none', fontWeight: 600 }} />
                  <Tab label="Foreign Citizen/NRI" sx={{ textTransform: 'none', fontWeight: 600 }} />
                </Tabs>

                {isIndian && (
                  <Box
                    sx={{
                      border: '1px solid #D09704',
                      borderRadius: 1.5,
                      px: 2,
                      py: 1.5,
                      mb: 2,
                      color: '#8A6A00',
                      background: '#FFF9E8',
                    }}
                  >
                    <Typography variant="body2">
                      Tax Benefit: Donations are eligible for 50% tax exemption under Section 80G
                      of the Income Tax Act (India). PAN is required to claim tax benefits.
                    </Typography>
                  </Box>
                )}

                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                  Choose an amount to donate <Box component="span" sx={{ color: '#D09704' }}>*</Box>
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
                    gap: 1,
                    mb: 2,
                  }}
                >
                  {amountOptions.map((amount) => {
                    const isActive = selectedAmount === amount;
                    return (
                      <Button
                        key={amount}
                        variant="outlined"
                        onClick={() => handleAmountSelect(amount)}
                        sx={{
                          borderColor: isActive ? '#D09704' : 'divider',
                          color: isActive ? '#D09704' : 'text.primary',
                          fontWeight: isActive ? 700 : 600,
                          backgroundColor: isActive ? 'rgba(208,151,4,0.12)' : 'transparent',
                          '&:hover': {
                            borderColor: '#D09704',
                            backgroundColor: 'rgba(208,151,4,0.18)',
                          },
                        }}
                      >
                        ₹{amount}
                      </Button>
                    );
                  })}
                  <Button
                    variant="outlined"
                    onClick={() => setSelectedAmount('other')}
                    sx={{
                      borderColor: isOtherSelected ? '#D09704' : 'divider',
                      color: isOtherSelected ? '#D09704' : 'text.primary',
                      fontWeight: isOtherSelected ? 700 : 600,
                      backgroundColor: isOtherSelected ? 'rgba(208,151,4,0.12)' : 'transparent',
                      '&:hover': {
                        borderColor: '#D09704',
                        backgroundColor: 'rgba(208,151,4,0.18)',
                      },
                    }}
                  >
                    Other
                  </Button>
                </Box>

                <Stack spacing={2}>
                  {isOtherSelected && (
                    <TextField
                      label="Other Amount (INR)"
                      type="number"
                      fullWidth
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setErrors((prev) => ({ ...prev, amount: undefined }));
                      }}
                      error={!!errors.amount}
                      helperText={errors.amount}
                    />
                  )}
                  <TextField
                    label="Enter your full name"
                    fullWidth
                    value={donor.name}
                    onChange={handleFieldChange('name')}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                  <TextField
                    label="Mobile Number"
                    fullWidth
                    value={donor.phone}
                    onChange={handleFieldChange('phone')}
                    error={!!errors.phone}
                    helperText={errors.phone}
                  />
                  <TextField
                    label="Email Address"
                    type="email"
                    fullWidth
                    value={donor.email}
                    onChange={handleFieldChange('email')}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                  <TextField
                    label="PAN Card"
                    fullWidth
                    value={donor.pan}
                    onChange={handleFieldChange('pan')}
                    error={!!errors.pan}
                    helperText={errors.pan || (isIndian ? 'PAN is mandatory for tax benefits.' : 'PAN optional for foreign donors.')}
                  />
                </Stack>

                <FormControlLabel
                  sx={{ mt: 2 }}
                  control={
                    <Checkbox
                      checked={agreed}
                      onChange={(e) => {
                        setAgreed(e.target.checked);
                        setErrors((prev) => ({ ...prev, agreed: undefined }));
                      }}
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="body2">
                      I have read and agree to the{' '}
                      <Link href="/terms" underline="hover">
                        Terms and Conditions
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" underline="hover">
                        Privacy Policy
                      </Link>
                      .
                    </Typography>
                  }
                />
                {errors.agreed && (
                  <Typography variant="caption" sx={{ color: 'error.main' }}>
                    {errors.agreed}
                  </Typography>
                )}

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    background: '#D09704',
                    fontWeight: 700,
                    '&:hover': { background: '#B07A00' },
                  }}
                  onClick={handleDonateClick}
                >
                  Continue to Payment ₹{isAmountValid ? donationAmount.toFixed(2) : '0.00'}
                </Button>
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default GetInvolved;
