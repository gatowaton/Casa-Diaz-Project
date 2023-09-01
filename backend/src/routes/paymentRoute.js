const {Router} = require("express");
const { createOrder, receiveWebhook } = require("../controllers/paymentController");

const router = Router()

router.post("/create-order", createOrder)

router.get("/success", (req, res)=> res.send("success"))

router.get("/failure", (req, res)=> res.send("failure"))

router.get("/pending", (req, res)=> res.send("pending"))

router.get("/webhook", receiveWebhook)


module.exports = router