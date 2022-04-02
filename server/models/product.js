const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String, require: true },
    img: { type: String, require: true },
    size: { type: String },
    color: { type: String },
    categories: { type: Array },
    price: { type: Number, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
