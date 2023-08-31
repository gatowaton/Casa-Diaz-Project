const {Router} = require("express");
const router = Router();
const {getProducts, createProduct, updateProduct, deleteProduct, getProduct} = require("../controllers/productController")
const { authRequire } = require("../middlewares/validateToken");

// router.route("/")
//     .get(getProducts)
//     .post(createProduct);

// router.route("/:id")
//     .get(getProduct)
//     .put(updateProduct)
//     .delete(deleteProduct)

router.get("/product", getProducts)

router.get("/product/:id", getProduct)

router.post("/product", createProduct)

router.delete("/products/:id", authRequire, deleteProduct)

router.put("/products", authRequire, updateProduct)

module.exports = router;