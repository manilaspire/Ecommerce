const validateRequest = require('../Middleware/validate-request');
const productService = require('../services/productService');

exports.create=async(req, res, next)=> {
  productService.createProduct(req.body)
        .then(() => res.json({ message: 'Product created' }))
        .catch(next);
}
exports.getAll =async(req, res, next)=> {
  productService.getAll()
        .then(product => res.json(product))
        .catch(next);
}
exports.getProduct =(req, res, next) =>{
  productService.getProduct(req.params.id)
        .then(product => res.json(product))
        .catch(next);
}
exports.getProductByCategory =(req, res, next) =>{
  productService.getProductByCategory(req.params.id)
        .then(product => res.json(product))
        .catch(next);
}
