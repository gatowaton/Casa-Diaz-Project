const express = require('express');
const morgan = require("morgan");
const cookieParser = require("cookie-parser")
const app = express();
const cors = require("cors")
const authRoutes = require("./routes/authRoute")
const paymentRoutes = require("./routes/paymentRoute")
const { FRONTEND_URL } = require("./config")



app.use(morgan("dev"));

//settings

        //VAR   VALUE
app.set("port", process.env.PORT || 4000);

//middlewares: funciones que se ejecutan antes de que llegen a las rutas
//cada vez que llegue una peticion a mi sv va a poder enviar y recibir datos
app.use(cors({
        origin: "https://casa-qwcy.onrender.com",
        credentials: true
}));
//que tipo de datos enviara este sv: archivo en formato json// req.body a formato json
app.use(express.json());

app.use(cookieParser())

//routes
//app.use: cada vez que un usuario visite esta ruta usare otra logica
app.use("/api", require("./routes/product"))
app.use("/api" , authRoutes)
app.use("/api", paymentRoutes)












 

module.exports = app