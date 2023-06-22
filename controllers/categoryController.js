const validateRequest = require('../Middleware/validate-request');
const categoryService = require('../services/categoryService');

exports.create=async(req, res, next)=> {
    categoryService.createCategory(req.body)
        .then(() => res.json({ message: 'Category created' }))
        .catch(next);
}
exports.getAll =async(req, res, next)=> {
    categoryService.getAll()
        .then(category => res.json(category))
        .catch(next);
}
exports.getCategory =(req, res, next) =>{
    categoryService.getCategory(req.params.id)
        .then(category => res.json(category))
        .catch(next);
}