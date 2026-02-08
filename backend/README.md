# Dharmamma Charitable Trust - Backend API

Backend for the Dharmamma Charitable Trust web application with Razorpay payment integration.

## Installation

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Update `.env` with your Razorpay credentials:
```
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Payment Endpoints

#### 1. Create Order
- **URL**: `POST /api/payment/create-order`
- **Body**:
```json
{
  "amount": 500,
  "donorName": "John Doe",
  "donorEmail": "john@example.com",
  "donorPhone": "9876543210"
}
```
- **Response**:
```json
{
  "id": "order_IluGWxBm9U8zJ8",
  "amount": 50000,
  "currency": "INR",
  "status": "created"
}
```

#### 2. Verify Payment
- **URL**: `POST /api/payment/verify-payment`
- **Body**:
```json
{
  "razorpay_order_id": "order_IluGWxBm9U8zJ8",
  "razorpay_payment_id": "pay_IluGWxBm9U8zJ8",
  "razorpay_signature": "signature_hash",
  "amount": 500,
  "donorName": "John Doe"
}
```
- **Response**:
```json
{
  "success": true,
  "message": "Payment verified successfully",
  "payment_id": "pay_IluGWxBm9U8zJ8",
  "order_id": "order_IluGWxBm9U8zJ8"
}
```

#### 3. Get Payment Details
- **URL**: `GET /api/payment/payment/:paymentId`
- **Response**:
```json
{
  "id": "pay_IluGWxBm9U8zJ8",
  "amount": 500,
  "currency": "INR",
  "status": "captured",
  "method": "card",
  "created_at": 1234567890,
  "notes": {
    "donor_name": "John Doe",
    "donor_email": "john@example.com"
  }
}
```

### Contact Endpoints

#### 1. Submit Contact Form
- **URL**: `POST /api/contact/submit`
- **Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "subject": "Inquiry about donation",
  "message": "I would like to know more about your programs."
}
```
- **Response**:
```json
{
  "success": true,
  "message": "Your message has been received.",
  "reference_id": "CONTACT_1234567890"
}
```

#### 2. Subscribe to Newsletter
- **URL**: `POST /api/contact/subscribe`
- **Body**:
```json
{
  "email": "john@example.com",
  "name": "John Doe"
}
```
- **Response**:
```json
{
  "success": true,
  "message": "You have been subscribed to our newsletter."
}
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment | development |
| RAZORPAY_KEY_ID | Razorpay public key | rzp_test_xxxxx |
| RAZORPAY_KEY_SECRET | Razorpay secret key | xxxxx |
| CLIENT_URL | Frontend URL | http://localhost:3000 |

## Razorpay Setup

1. Create account at [razorpay.com](https://razorpay.com)
2. Go to Settings > API Keys
3. Copy your Key ID and Key Secret
4. Add them to `.env` file

## Security Features

- CORS enabled for frontend communication
- Helmet.js for security headers
- Input validation using express-validator
- Signature verification for payment validation
- Environment variables for sensitive data

## Error Handling

All endpoints return appropriate HTTP status codes:
- `200` - Success
- `400` - Bad Request (validation error)
- `500` - Server Error

## Development

The project uses:
- **Express.js** - Web framework
- **Razorpay** - Payment gateway
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **Nodemon** - Auto-reload during development

## License

ISC
