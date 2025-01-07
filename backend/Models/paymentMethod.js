const mongoose = require('mongoose');

const paymentMethodSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
  method: { type: String, required: true },
  details: { type: String, required: true },
});

module.exports = mongoose.model('PaymentMethod', paymentMethodSchema);