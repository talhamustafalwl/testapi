const { ProductUser } = require("../model/ProductUser");
const { Product } = require("../model/Product");

class ProductUserController {
  constructor() {}

  async getProductUsers(req, res, next) {
    try {

        ProductUser.find({}).populate('productId')
        .then((response) => {
          return res.status(200).json({
            success: true,
            status: 200,
            message: "Product User found successfully",
            data: response
          });
        })
        .catch((error) => {
          return res.status(400).json({
            success: false,
            status: 400,
            message: "Error Fetching All Product User",
            error,
          });
        });
    } catch (error) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Error Fetching All Company",
        error,
      });
    }
  }



   async addProductUser(req, res, next) {
    try {
         console.log(req.body);
      console.log('adding Product User---');
      new ProductUser({...req.body})
        .save()
        .then(async(response) => {
          await Product.updateMany({},{ $set:{addedToCart:false}})
          req.body.productId.map(obj=> 
            Product.updateOne({_id: obj._id}, {$inc: {quantity: -obj.quantity}}).then(resultDone => {
              console.log(resultDone)
            }))
         

          return res.status(200).json({
            success: true,
            status: 200,
            message: "Product User added successfully",
            data: response,
          });
        })
        .catch((error) => {
          return res.status(400).json({
            success: false,
            status: 400,
            message: "Error Adding Product User",
            error,
          });
        });
    } catch (error) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Error Adding Product User",
        error,
      });
    }
  }



}


module.exports = new ProductUserController();