const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("../Api/db/mongoose");

app.use(express.json()); /*map json => instead od bodyParser*/
app.use(cors()); /*identify different ports*/

const router = require("./routes/router");

/* Routes */
app.use("/api", router);

app.listen(3000, () => {
  console.log("Server connected to port 3000");
});
