const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//model
const Product = require("../../db/models/product.model");

router.get("/", (req, res) => {
  Product.find({})
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  res.status(200);
});

router.post("/", (req, res) => {
  new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  }).save();
  res.status(200);
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "You discovered the special ID",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "You passed an ID",
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Updated product!",
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted product!",
  });
});

module.exports = router;
