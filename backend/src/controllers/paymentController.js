const mercadopago = require("mercadopago")

const createOrder = async (req, res) => {

    mercadopago.configure({
        access_token:"TEST-8878962139061488-080815-0851094a71cbd65c94ab458a0b6f56f7-1444620939",   
    })
    //crear orden de compra
    const preference = {
        items:[
            {
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
                currency_id:"CLP",
                picture_url:  req.body.Foto,
            }
        ],
        back_urls:{
            success:"http://localhost:4000/api/success",
            failure:"http://localhost:4000/api/failure",
            pending:"http://localhost:4000/api/pending"
        },
        auto_return: "approved",
    }
    
    mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		})
}


module.exports = {createOrder}