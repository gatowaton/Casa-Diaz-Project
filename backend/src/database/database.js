//codigo de la conexion a la base de datos
const mongoose = require('mongoose');


// mongoose.connect(process.env.MONGODB_URI,{
//     //opciones para que mongodb se pueda conectar y no de errores
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// //cuando se conecte quiero escuchar esa cadena de conexion
// const connection = mongoose.connection;
// //cuando la conexion sea abierta quiero que ejecute algo por clg
// connection.once("open", () =>{
//     console.log("DB is connected")
// });

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB is connected");
    } catch (error){
        console.log(error)
    }
}

module.exports = connectDB