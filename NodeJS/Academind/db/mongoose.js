const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://127.0.0.1:27017/NodejsPractice", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected Successfully !"))
  .catch((error) => console.log("error: " + error));

  module.exports = mongoose;