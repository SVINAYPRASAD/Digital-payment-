const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const transactionController = require('./controllers/transactionController');
const paymentMethodController = require('./controllers/paymentMethodController');

router.post('/users', userController.register);
router.post('/users/login', userController.login);

router.post('/transactions', transactionController.create);
router.get('/transactions', transactionController.getAll);

router.post('/payment-methods', paymentMethodController.create);
router.get('/payment-methods', paymentMethodController.getAll);

module.exports = router;