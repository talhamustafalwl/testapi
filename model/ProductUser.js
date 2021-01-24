const mongoose = require("mongoose");
var idvalidator = require("mongoose-id-validator");

const productStructureSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",quantity:String
  },
  name: { type: String },
  quantity: { type: Number },
})

const ProductUserSchema = mongoose.Schema(
  {
    name:String,
    email:String,
    amount:Number,
    productId: [productStructureSchema]
  },
  { timestamps: true }
);



ProductUserSchema.plugin(idvalidator);
const ProductUser = mongoose.model("ProductUser", ProductUserSchema);

module.exports = { ProductUser };
