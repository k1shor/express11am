const express = require('express')
const { addProduct, viewProducts, productDetails, updateProduct, deleteProduct, findProductbyCategory, filterProduct, relatedProducts } = require('../controller/productController')
const { requireSignin } = require('../controller/userController')
const { upload } = require('../utils/upload')
const { productRules, validate } = require('../validation')
const router = express.Router()

router.post('/addproduct',upload.single('product_image'), productRules, validate, requireSignin, addProduct)
router.get('/productlist', viewProducts)
router.get('/productdetails/:product_id', productDetails)
router.put('/updateproduct/:id', requireSignin, updateProduct)
router.get('/deleteproduct/:id', requireSignin, deleteProduct)
router.get('/findbycategory/:category_id',findProductbyCategory)
router.post('/getfilteredProduct',filterProduct)
router.get('/relatedproducts/:id', relatedProducts)

module.exports = router