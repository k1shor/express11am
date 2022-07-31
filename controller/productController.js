const Product = require("../models/productModel")

// add product
exports.addProduct = async(req, res) => {
    let product = new Product({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_description: req.body.product_description,
        count_in_stock: req.body.count_in_stock,
        category: req.body.category,
        product_image: req.file.path
    })
    product = await product.save()
    if(!product){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(product)
}

// view products
exports.viewProducts = async (req, res) => {
    let products = await Product.find().populate('category','category_name')
    // .sort([['createdAt',1]])
    // .limit(8)
    // .skip(2)
    if(!products){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(products)
}

// view product details
exports.productDetails = async(req, res) => {
    let product = await Product.findById(req.params.product_id).populate('category','category_name')
    if(!product){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(product)
}
// update product
exports.updateProduct = async(req, res) => {
    let product = await Product.findByIdAndUpdate(req.params.id,{
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_description: req.body.product_description,
        count_in_stock: req.body.count_in_stock,
        category: req.body.category,
        rating: req.body.rating
    },
    {new:true})
    if(!product){
        return res.status(400).json({error: "Something went wrong"})
    }
    res.send(product)
}

// delete product
exports.deleteProduct = async (req,res) => {
    let product = await Product.findByIdAndDelete(req.params.id)
    if(!product){
        return res.status(400).json({error:"Product not found"})
    }
    return res.status(200).json({error: "product deleted successfully"})
}

// find by category
exports.findProductbyCategory = async (req,res) => {
    let products = await Product.find({category: req.params.category_id})
    if(!products){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(products)
}