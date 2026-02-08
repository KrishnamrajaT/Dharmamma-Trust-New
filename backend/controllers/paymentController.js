const Razorpay = require('razorpay');
const crypto = require('crypto');

// Lazy load Razorpay instance
const getRazorpayInstance = () => {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error('Razorpay credentials not configured. Please add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to .env file');
  }
  
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};

// Create Order
exports.createOrder = async (req, res) => {
  try {
    const razorpay = getRazorpayInstance();
    const { amount, currency = 'INR', receipt, donorName, donorEmail, donorPhone } = req.body;

    // Validate amount
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const options = {
      amount: amount * 100, // Convert to paise
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      notes: {
        donor_name: donorName || 'Anonymous',
        donor_email: donorEmail || 'N/A',
        donor_phone: donorPhone || 'N/A',
        for: 'Dharmamma Charitable Trust Donation'
      }
    };

    const order = await razorpay.orders.create(options);

    res.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      status: order.status
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ 
      error: 'Failed to create order',
      message: error.message 
    });
  }
};

// Verify Payment
exports.verifyPayment = async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      donorName,
      donorEmail,
      donorPhone,
      amount
    } = req.body;

    // Create signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest('hex');

    // Validate signature
    if (razorpay_signature === expectedSign) {
      // Signature is valid - Save transaction details to database if needed
      console.log('Payment verified successfully');
      console.log({
        order_id: razorpay_order_id,
        payment_id: razorpay_payment_id,
        donor_name: donorName,
        donor_email: donorEmail,
        amount: amount
      });

      return res.json({
        success: true,
        message: 'Payment verified successfully',
        payment_id: razorpay_payment_id,
        order_id: razorpay_order_id
      });
    } else {
      // Signature is not valid
      console.error('Invalid signature');
      return res.status(400).json({
        success: false,
        message: 'Payment verification failed'
      });
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({ 
      error: 'Verification failed',
      message: error.message 
    });
  }
};

// Get Payment Details
exports.getPaymentDetails = async (req, res) => {
  try {
    const razorpay = getRazorpayInstance();
    const { paymentId } = req.params;

    const payment = await razorpay.payments.fetch(paymentId);

    res.json({
      id: payment.id,
      amount: payment.amount / 100, // Convert from paise to rupees
      currency: payment.currency,
      status: payment.status,
      method: payment.method,
      created_at: payment.created_at,
      notes: payment.notes
    });
  } catch (error) {
    console.error('Fetch payment error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch payment details',
      message: error.message 
    });
  }
};
