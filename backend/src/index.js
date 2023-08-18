// dotenv debe iniciar primero
// require('dotenv').config();
const app = require('./app');
// require("./database/database");
const connectDB = require("./database/database")




async function main(){
  await app.listen(app.get("port"))
  console.log("Server on port", app.get("port"));
}


//env config

// Connecting to database
connectDB();
main();
