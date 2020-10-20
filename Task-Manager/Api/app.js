const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./routes/router')
const mongoose = require("../database/mongoose");

app.use(express.json()); /*map json*/
app.use(cors()); /*identify different ports*/

/* Route Handler */
app.use("/api", router);

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
})