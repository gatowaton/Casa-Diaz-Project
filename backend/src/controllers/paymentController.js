// const mercadopago = require("mercadopago")

// const createOrder = async (req, res) => {

//     mercadopago.configure({
//         access_token: process.env.MERCADO_BACK,   
//     })

//     const products = req.body.products;
//     //crear orden de compra
//     const items = products.map((product) => ({
//         title: product.Titulo,
//         unit_price: Number(product.PrecioVentaBruto),
//         quantity: Number(product.quantity),
//         currency_id: "CLP",
//       }));
     
//     console.log("items:", items);
//     const productTitles = req.body.productTitles;
//     // const productTitles = req.body.productTitles;
//     // console.log("Product Titles:", productTitles);  

//     const description = products.map((product) => product.Titulo).join(", "); // Concatenar títulos de productos
//       console.log("desc:",description);
//     const preference = {
//         items: items,
//         notification_url: "https://casa-back.onrender.com/api/webhook",
//         back_urls:{
//             success:"https://casa-back.onrender.com/api/success",
//             failure:"https://casa-back.onrender.com/api/failure",
//             pending:"https://casa-back.onrender.com/api/pending"
//         },
//         description: `Compra de:${description}`, // Agregar la descripción concatenada
//         auto_return: "approved",
//     }
    
//     mercadopago.preferences.create(preference)
// 		.then(function (response) {
// 			res.json({
// 				id: response.body.id            
// 			});
// 		}).catch(function (error) {
// 			console.log(error);
// 		})

        
// }

// const receiveWebhook = async (req, res) => {
//     try {
//       const payment = req.query;
//       console.log(payment);
//       if (payment.type === "payment") {
//         const data = await mercadopago.payment.findById(payment["data.id"]);
//         console.log(data);
//       }
  
//       res.sendStatus(204);
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ message: "Something goes wrong" });
//     }
//   };


// module.exports = {createOrder, receiveWebhook}


const mercadopago = require("mercadopago");

const createOrder = async (req, res) => {
  try {
    mercadopago.configure({
      access_token: process.env.MERCADO_BACK,
    });

    const products = req.body.products;
    const items = products.map((product) => ({
      title: product.Titulo,
      unit_price: Number(product.PrecioVentaBruto),
      quantity: Number(product.quantity),
      currency_id: "CLP",
      description: `${product.Titulo}`
    }));

    const productTitles = products.map((product) => product.Titulo).join(", ");
    console.log("titles:", productTitles);
    
    const preference = {
      items: items,
      notification_url: "https://casa-back.onrender.com/api/webhook",
      back_urls: {
        success: `${process.env.FRONTEND_URL}/success`,
        failure: "https://casa-back.onrender.com/api/failure",
        pending: "https://casa-back.onrender.com/api/pending",
      },
      description: `Compra de: ${productTitles}`,
      auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({
      id: response.body.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

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
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { createOrder, receiveWebhook };