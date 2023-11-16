const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  // Other plan details
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
