const productController = {};

const ProductModel = require("../models/productModel");

productController.getProducts = async (req, res) => {
    //todo en la coleccion
    const products = await ProductModel.find();  // [{}, {}] devuelve un arreglo con los productos
    res.json(products);
};

productController.getProduct = (req, res) => res.json({msg: "product"});

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

productController.updateProduct = (req, res) => res.json({msg: "product"});

productController.deleteProduct = (req, res) => res.json({msg: "product"});


module.exports = productController;