const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Submit contact form
router.post('/submit', contactController.submitContactForm);

// Subscribe to newsletter
router.post('/subscribe', contactController.subscribeNewsletter);

module.exports = router;
