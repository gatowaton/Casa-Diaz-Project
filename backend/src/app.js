const express = require('express');
const morgan = require("morgan");
const app = express();
const cors = require("cors")
const authRoutes = require("./routes/authRoute")



app.use(morgan("dev"));

//settings

        //VAR   VALUE
app.set("port", process.env.PORT || 4000);

//middlewares: funciones que se ejecutan antes de que llegen a las rutas
//cada vez que llegue una peticion a mi sv va a poder enviar y recibir datos
app.use(cors());
//que tipo de datos enviara este sv: archivo en formato json// req.body a formato json
app.use(express.json());

//routes
//app.use: cada vez que un usuario visite esta ruta usare otra logica
app.use("/api/product", require("./routes/product"))
app.use("/api" , authRoutes)
 

module.exports = app