// dotenv debe iniciar primero
require('dotenv').config();
const app = require('./app');
require("./database/database");


async function main(){
  await app.listen(4000)
  console.log("Server on port", 4000);
}


//env config

// Connecting to database
main();