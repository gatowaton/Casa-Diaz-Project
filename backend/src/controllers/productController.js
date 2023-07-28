const ProductModel = require("../models/productModel");
const productController = {};

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
    const { 
            Titulo,
            CodigoProducto,
            CodigoAlternativo,
            Categoria,
            SubCategoria,
            UnidadMedida,
            Marca,
            PrecioVentaNeto,
            PrecioVentaBruto,
            Exento,
            CodigoImpuesto,
            Inventariable,
            Activo,
            Stock,
            Foto 
        } = req.body;
    const newProduct = new ProductModel({
        Titulo,
        CodigoProducto,
        CodigoAlternativo,
        Categoria,
        SubCategoria,
        UnidadMedida,
        Marca,
        PrecioVentaNeto,
        PrecioVentaBruto,
        Exento,
        CodigoImpuesto,
        Inventariable,
        Activo,
        Stock,
        Foto
    })

    // await newProduct.save();  // guardar en db
    // res.json({msg: "product created"})
    const savedProduct = await newProduct.save()
    res.json(savedProduct)
};

productController.updateProduct = async (req, res) => {
    const {
        Titulo,
        CodigoProducto,
        CodigoAlternativo,
        Categoria,
        SubCategoria,
        UnidadMedida,
        Marca,
        PrecioVentaNeto,
        PrecioVentaBruto,
        Exento,
        CodigoImpuesto,
        Inventariable,
        Activo,
        Stock,
        Foto 
    } = req.body;
    await ProductModel.findByIdAndUpdate(req.params.id,{
        Titulo,
        CodigoProducto,
        CodigoAlternativo,
        Categoria,
        SubCategoria,
        UnidadMedida,
        Marca,
        PrecioVentaNeto,
        PrecioVentaBruto,
        Exento,
        CodigoImpuesto,
        Inventariable,
        Activo,
        Stock,
        Foto 
    })
    res.json({msg: "product updated"})
};

productController.deleteProduct = async (req, res) => {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.json({msg: "product deleted"})
};


module.exports = productController;