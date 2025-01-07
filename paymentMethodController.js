const PaymentMethod = require('../models/paymentMethod');

exports.create = async (req, res) => {
  try {
    const paymentMethod = new PaymentMethod(req.body);
    await paymentMethod.save();
    res.send(paymentMethod);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    const paymentMethods = await PaymentMethod.find();
    res.send(paymentMethods);
  } catch (error) {
    res.status(400).send(error);
  }
};