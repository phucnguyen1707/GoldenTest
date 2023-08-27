const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  price: { type: Number },
  color: { type: String },
});

module.exports = mongoose.model("Product", Product);
