const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const paymentController = require('../controllers/paymentController');

// Create Order endpoint
router.post('/create-order', [
  body('amount').isInt({ min: 1 }).withMessage('Amount must be greater than 0'),
  body('currency').optional().isIn(['INR']).withMessage('Invalid currency'),
  body('receipt').optional().trim(),
  body('donorName').optional().trim(),
  body('donorEmail').optional().isEmail(),
  body('donorPhone').optional().trim()
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, paymentController.createOrder);

// Verify Payment endpoint
router.post('/verify-payment', [
  body('razorpay_order_id').notEmpty().withMessage('Order ID is required'),
  body('razorpay_payment_id').notEmpty().withMessage('Payment ID is required'),
  body('razorpay_signature').notEmpty().withMessage('Signature is required'),
  body('amount').isInt({ min: 1 }).withMessage('Amount is required')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, paymentController.verifyPayment);

// Get Payment Details endpoint
router.get('/payment/:paymentId', paymentController.getPaymentDetails);

module.exports = router;
