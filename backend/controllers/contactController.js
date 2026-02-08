const { body, validationResult } = require('express-validator');

// Handle Contact Form Submissions
exports.submitContactForm = [
  // Validation middleware
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('phone').optional().isLength({ min: 10 }).withMessage('Invalid phone number'),
  body('subject').trim().isLength({ min: 5 }).withMessage('Subject must be at least 5 characters'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),

  // Handle the request
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, phone, subject, message } = req.body;

      // Here you would typically save to database or send email
      console.log('Contact Form Submission:', {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date()
      });

      // In production, you would:
      // 1. Save to database
      // 2. Send confirmation email to user
      // 3. Send notification email to admin

      res.json({
        success: true,
        message: 'Your message has been received. We will get back to you soon.',
        reference_id: `CONTACT_${Date.now()}`
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({
        error: 'Failed to submit contact form',
        message: error.message
      });
    }
  }
];

// Handle Newsletter Signup
exports.subscribeNewsletter = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('name').optional().trim(),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, name } = req.body;

      console.log('Newsletter Subscription:', {
        email,
        name: name || 'Anonymous',
        timestamp: new Date()
      });

      res.json({
        success: true,
        message: 'You have been subscribed to our newsletter.'
      });
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      res.status(500).json({
        error: 'Subscription failed',
        message: error.message
      });
    }
  }
];
