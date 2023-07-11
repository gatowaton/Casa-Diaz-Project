const express = require('express');
const app = express();
const routes = require("../src/routes/router")

app.use(routes);

module.exports = app