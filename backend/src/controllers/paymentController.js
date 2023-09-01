const mercadopago = require("mercadopago")

const createOrder = async (req, res) => {

    mercadopago.configure({
        access_token:"TEST-8878962139061488-080815-0851094a71cbd65c94ab458a0b6f56f7-1444620939",   
    })

    const products = req.body.products;
    //crear orden de compra
    const items = products.map((product) => ({
        title: product.Titulo,
        unit_price: Number(product.PrecioVentaBruto),
        quantity: Number(product.quantity),
        currency_id: "CLP",
      }));
     
    
    const productTitles = req.body.productTitles;
    console.log("Product Titles:", productTitles);  

    const description = products.map((product) => product.Titulo).join(", "); // Concatenar títulos de productos

    const preference = {
        items: items,
        notification_url: "https://casa-back.onrender.com/api/webhook",
        back_urls:{
            success:"https://casa-back.onrender.com/api/success",
            failure:"https://casa-back.onrender.com/api/failure",
            pending:"https://casa-back.onrender.com/api/pending"
        },
        description: description, // Agregar la descripción concatenada
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

const receiveWebhook = async (req, res) => {
    try {
      const payment = req.query;
      console.log(payment);
      if (payment.type === "payment") {
        const data = await mercadopago.payment.findById(payment["data.id"]);
        console.log(data);
      }
  
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };


module.exports = {createOrder, receiveWebhook}