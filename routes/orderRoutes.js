const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const orderController = require('../controllers/orderController');

router.post('/', auth, orderController.createOrder);
router.get('/', auth, orderController.listOrders);

module.exports = router;
