const {Router} = require("express");
const router = Router();
const {getProducts, createProduct, updateProduct, deleteProduct, getProduct} = require("../controllers/productController")

router.route("/")
    .get(getProducts)
    .post(createProduct);

router.route("/:id")
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router;