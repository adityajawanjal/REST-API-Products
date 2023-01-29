const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, "Price must be provided."],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 4.9,
    },
    company: {
      type: String,
      required:[true, "Company name must be provided."],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product",productSchema);