const categories = require("../models/categories.json") 
const products = require("../models/products.json") 

    // exports.getAllProducts = async (req, res, next) => 
    // {
    //     res.send('PRODUCT WORKING');
    // }

  exports.getCategories = async (req, res, next) => 
  {
    try
    {
       return res.status(200).send(categories);
    }
    catch(error)
    {
        return res.status(400).send({ error: "An error has occurred, unable to fetch Categories" });
    }
  }
  exports.getAllProducts = async (req, res, next) => 
  {
    try
    {
       return res.status(200).send(products);
    }
    catch(error)
    {
        return res.status(400).send({ error: "An error has occurred, unable to fetch products" });
    }
  }