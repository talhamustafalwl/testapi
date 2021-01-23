const mongoose = require("mongoose");
var idvalidator = require("mongoose-id-validator");

const ProductUserSchema = mongoose.Schema(
  {
    name:String,
    email:String,
    productId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    }],
  },
  { timestamps: true }
);

ProductUserSchema.plugin(idvalidator);
const ProductUser = mongoose.model("ProductUser", ProductUserSchema);

module.exports = { ProductUser };
