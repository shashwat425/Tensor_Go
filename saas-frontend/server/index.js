const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stripe = require('stripe')('your_stripe_secret_key');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/saas_app', { useNewUrlParser: true, useUnifiedTopology: true });

// MongoDB models
const Plan = require('./models/Plan');
const User = require('./models/User');

// Routes
const plansRoutes = require('./routes/plans');
const usersRoutes = require('./routes/users');

app.use('/api/plans', plansRoutes);
app.use('/api/users', usersRoutes);

// Stripe Integration
app.post('/api/charge', async (req, res) => {
  try {
    const { token } = req.body;

    // Use the Stripe Node.js library to create a charge
    const charge = await stripe.charges.create({
      amount: 1000, // Amount in cents
      currency: 'usd',
      source: token,
      description: 'Example Charge',
    });

    // Handle successful charge, update order status, etc.

    res.status(200).json({ message: 'Payment successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
