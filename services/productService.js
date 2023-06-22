const bcrypt = require('bcryptjs');

const db = require('../Entity/database');

async function getAll() {
    return await db.Product.findAll();
}
async function createProduct(params) {    
    const product = new db.Product(params);    
    await product.save();
}
async function getProduct(id) {
    const product = await db.Product.findByPk(id);
    if (!product) throw 'Product not found';
    return product;
}

module.exports = {
    getAll,    
    createProduct,
    getProduct   
};