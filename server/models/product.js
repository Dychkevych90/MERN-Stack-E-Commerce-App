const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String, require: true },
    img: { type: String, require: true },
    size: { type: String },
    quantity: { type: Number, default: 1 },
    color: { type: String },
    categories: { type: Array },
    price: { type: Number, require: true },
    favorite: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
