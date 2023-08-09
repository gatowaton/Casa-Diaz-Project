const {Router} = require("express");
const { createOrder } = require("../controllers/paymentController");

const router = Router()

router.post("/create-order", createOrder)

router.get("/success", (req, res)=> res.send("success"))

router.get("/failure", (req, res)=> res.send("failure"))

router.get("/pending", (req, res)=> res.send("pending"))

router.get("/webhook",)


module.exports = router