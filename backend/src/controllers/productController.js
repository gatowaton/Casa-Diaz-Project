const productController = {};

const ProductModel = require("../models/productModel");

productController.getProducts = async (req, res) => {
    //todo en la coleccion
    const products = await ProductModel.find();  // [{}, {}] devuelve un arreglo con los productos
    res.json(products);
};

productController.getProduct = async (req, res) => {
    const product = await ProductModel.findById(req.params.id) //devulve un producto
    res.json(product)
};

productController.createProduct = async(req, res) => {
    const { title, description, price, stock, image, brand } = req.body;
    const newProduct = new ProductModel({
        title: title,
        description: description,
        price: price,
        stock: stock,
        image: image,
        brand: brand
    })

    await newProduct.save();  // guardar en db
    res.json({msg: "product created"})
};

productController.updateProduct = async (req, res) => {
    const {title, description, price, stock, image, brand} = req.body;
    await ProductModel.findByIdAndUpdate(req.params.id,{
        title, 
        description, 
        price, 
        stock, 
        image, 
        brand
    })
    res.json({msg: "product updated"})
};

productController.deleteProduct = async (req, res) => {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.json({msg: "product deleted"})
};


module.exports = productController;