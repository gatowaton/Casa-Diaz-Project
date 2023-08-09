const { query } = require("express");
const mercadopago = require("mercadopago")

const createOrder = async (req, res) => {

    mercadopago.configure({
        access_token:"TEST-8878962139061488-080815-0851094a71cbd65c94ab458a0b6f56f7-1444620939",   
    })
    //crear orden de compra
    const result = await mercadopago.preferences.create({
        items:[
            {
                title:"laptop",
                unit_price:10000,
                currency_id:"CLP",
                quantity: 1,
            }
        ],
        back_urls:{
            success:"http://localhost:4000/api/success",
            failure:"http://localhost:4000/api/failure",
            pending:"http://localhost:4000/api/pending"
        }
    })

    console.log(result);

    res.send(result.body)
}


const reciveWebhook = (req, res) => {
    console.log(req.query);
    res.send("webhook")
}

module.exports = {createOrder, reciveWebhook}