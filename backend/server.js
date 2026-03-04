const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const paymentRoutes = require('./routes/payment');
const contactRoutes = require('./routes/contact');

const app = express();
const corsOptions = {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false,
};

// Middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Root Route
app.get('/', (req, res) => {
  res.json({
    name: 'Dharmamma Charitable Trust Backend App',
    message: 'Welcome to Dharmamma Charitable Trust Backend App',
    status: 'running',
    health: '/api/health',
    endpoints: {
      paymentCreateOrder: '/api/payment/create-order',
      paymentVerify: '/api/payment/verify-payment',
      contactSubmit: '/api/contact/submit',
    },
  });
});

// Routes
app.use('/api/payment', paymentRoutes);
app.use('/api/contact', contactRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
