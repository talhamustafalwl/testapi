const mongoose = require("mongoose");
var idvalidator = require("mongoose-id-validator");

const ProductSchema = mongoose.Schema(
  {
    inventoryStatus: {
      type: String,
      enum: ["In stock", "Out of stock"],
      default: "In stock",
    },
    conditionStatus:  {
      type: String,
      enum: ["Good Condition", "Damaged", "Expired"],
      default: "Good Condition",
    },
    quantity: {
      type: Number,
      default: 0,
    },
    price: {
        type: Number,
        default: 0,
      },
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      image:String,

    status: { type: String },
  },
  { timestamps: true }
);

ProductSchema.plugin(idvalidator);
const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
