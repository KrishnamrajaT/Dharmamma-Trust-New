import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E5090', // Professional Blue
      light: '#5A7FB5',
      dark: '#1B3057',
    },
    secondary: {
      main: '#FF9800', // Warm Orange
      light: '#FFB74D',
      dark: '#E65100',
    },
    success: {
      main: '#4CAF50',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    h1: {
      fontFamily: "'Poppins', 'Inter', system-ui",
      fontSize: '2.5rem',
      fontWeight: 800,
      marginBottom: '1rem',
      color: '#2E5090',
      letterSpacing: '0.3px'
    },
    h2: {
      fontFamily: "'Poppins', 'Inter', system-ui",
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '1rem',
      color: '#2E5090',
      textAlign: 'center',
      letterSpacing: '0.25px'
    },
    h3: {
      fontFamily: "'Poppins', 'Inter', system-ui",
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#2E5090',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#333333',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '8px',
        },
        contained: {
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          minWidth: 240,
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
