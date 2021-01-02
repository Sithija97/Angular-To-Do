const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("../Api/db/mongoose");

app.use(express.json()); /*map json => instead od bodyParser*/
//app.use(cors()); /*identify different ports*/

//CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

  next();
});

const router = require("./routes/router");

/* Routes */
app.use("/api", router);

app.listen(3000, () => {
  console.log("Server connected to port 3000");
});
