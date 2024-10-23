const express = require('express');
const database = require("./config/database");
require("dotenv").config();
const routeApi = require("./api/routes/index.route");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

database.connect();

app.use(cors());

app.use(bodyParser.json());

routeApi(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})