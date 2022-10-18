const express = require('express')
require('dotenv').config()
const db = require('./database/connection')

// middleware
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

// route
const Demoroute = require('./route/demoRoute')
const CategoryRoute = require('./route/categoryRoute')
const ProductRoute = require('./route/productRoute')
const UserRoute = require('./route/userRoute')
const OrderRoute = require('./route/orderRoute')
const PaymentRoute = require('./route/paymentRoute')


const app = express()
const port = process.env.PORT || 8000

// middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())


// routes
app.use(Demoroute)
app.use('/api',CategoryRoute)
app.use('/api',ProductRoute)
app.use('/api', UserRoute)
app.use('/api', OrderRoute)
app.use('/api',PaymentRoute)
app.use('/api/public/uploads', express.static('public/uploads'))

app.listen(port, ()=>{
    console.log("Server started at port "+port)
})


// app.get(url, function)
// app.get('/',(request, response)=>{
//     return response.send("This is express js at 11am..")
// })

// app.get('/first', (req, res)=>{
//     return res.send("This is first function")
// })
