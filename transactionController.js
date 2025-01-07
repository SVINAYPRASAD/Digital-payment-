const Transaction = require('../models/transaction');

exports.create = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.send(transactions);
  } catch (error) {
    res.status(400).send(error);
  }
};