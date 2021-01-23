const { Product } = require("../model/Product");

class ProductController {
  constructor() {}

  async getProducts(req, res, next) {
    try {

      // searchQuery(req.query, 'name', 'password', 'index')
       Product.find({} )
        .then((response) => {
          return res.status(200).json({
            success: true,
            status: 200,
            message: "Products found successfully",
            data: response
              .map((e) => e.toObject())
              .map((e) => ({
                ...e,
                logo: e.logo ? `http://localhost:5000/${e.logo}` : null,
              })),
          });
        })
        .catch((error) => {
          console.log(error)
          return res.status(400).json({
            success: false,
            status: 400,
            message: "Error Fetching All Product",
            error,
          });
        });
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Error Fetching All Product",
        error,
      });
    }
  }

  
    async updateProduct(req, res, next) {
      try {
        console.log(req.body);
        Product.updateOne({_id: req.params.id}, {...req.body}).then(response => {
            return res.status(200).json({
              success: true,
              status: 200,
              message: "Product updated successfully",
              data: response,
            });
        }).catch(error => {
          console.log(error);
          return res.status(400).json({
            success: false,
            status: 400,
            message: "Error updating Product",
            error,
          });
        })
      } catch (error) {
        return res.status(400).json({
          success: false,
          status: 400,
          message: "Error updating Product",
          error,
        });
      }
    }



  // Simple addition of Product...
  async addProduct(req, res, next) {
    try {
         console.log(req.body);
      console.log('adding Product---');
      new Product({...req.body})
        .save()
        .then((response) => {
          return res.status(200).json({
            success: true,
            status: 200,
            message: "Product added successfully",
            data: response,
          });
        })
        .catch((error) => {
          return res.status(400).json({
            success: false,
            status: 400,
            message: "Error Adding Product",
            error,
          });
        });
    } catch (error) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Error Adding Product",
        error,
      });
    }
  }




  async getProductDetailById(req, res, next) {
    try {
      Product.findById(req.params.id)
        .then((response) => {
          return res.status(200).json({
            success: true,
            status: 200,
            message: "Product Found successfully",
            data: response,
          });
        })
        .catch((error) => {
          return res.status(400).json({
            success: false,
            status: 400,
            message: "Error Adding Product",
            error,
          });
        });
    } catch (error) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Error Adding Product",
        error,
      });
    }
  }
}

module.exports = new ProductController();
