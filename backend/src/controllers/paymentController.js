const mercadopago = require("mercadopago");

mercadopago.configure({
    access_token: process.env.MERCADO_BACK,
});

const createOrder = async (req, res) => {
    try {
        const products = req.body.products;

        // Crear array de items para la preferencia
        const items = products.map((product) => ({
            title: product.Titulo,
            unit_price: Number(product.PrecioVentaBruto),
            quantity: product.quantity || 1, // Default a 1 si no se especifica la cantidad
            currency_id: "CLP",
        }));

        const productTitles = req.body.productTitles;
        console.log("Product Titles:", productTitles);

        const description = products.map((product) => product.Titulo).join(", ");

        const preference = {
            items: items,
            notification_url: "https://casa-back.onrender.com/api/webhook",
            back_urls: {
                success: "https://casa-back.onrender.com/api/success",
                failure: "https://casa-back.onrender.com/api/failure",
                pending: "https://casa-back.onrender.com/api/pending",
            },
            description: description,
            auto_return: "approved",
        };

        // Crear la preferencia en Mercado Pago
        const preferenceResponse = await mercadopago.preferences.create(preference);
        
        res.json({
            id: preferenceResponse.body.id,
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
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

module.exports = { createOrder, receiveWebhook };