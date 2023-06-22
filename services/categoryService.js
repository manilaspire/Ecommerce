const bcrypt = require('bcryptjs');

const db = require('../Entity/database');

async function getAll() {
    return await db.Category.findAll();
}
async function createCategory(params) {    
    const category = new db.Category(params);    
    await category.save();
}
async function getCategory(id) {
    const category = await db.Category.findByPk(id);
    if (!category) throw 'Category not found';
    return category;
}

module.exports = {
    getAll,    
    createCategory,
    getCategory   
};