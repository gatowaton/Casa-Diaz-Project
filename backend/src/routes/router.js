const express = require("express")
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("hello")
})

router.get("/product", (req,res)=>{
    res.send("product")
})


module.exports = router