const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId:   { type: String, required: true },
    products: { type: Array },
    total:    { type: String, required: true },
    payment: { type: Object }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);