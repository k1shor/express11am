const express = require('express')
const { sendStripeKey, processPayment } = require('../controller/paymentController')
const { requireSignin } = require('../controller/userController')
const router = express.Router()

router.get('/getStripeKey', sendStripeKey)
router.post('/processpayment', requireSignin, processPayment)

module.exports = router