const express = require('express')
const { placeOrder, viewOrders, orderDetails, userOrders, updateOrder, deleteOrder } = require('../controller/orderController')
const router = express.Router()

router.post('/placeorder',placeOrder)
router.get('/orders', viewOrders)
router.get('/orderdetails/:id', orderDetails)
router.get('/userorder/:userId', userOrders)
router.put('/updateorder/:id', updateOrder)
router.delete('/deleteorder/:orderId', deleteOrder)

module.exports = router