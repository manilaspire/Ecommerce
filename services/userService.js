const bcrypt = require('bcryptjs');

const db = require('../Entity/database');


async function getAll() {
    return await db.User.findAll();
}
async function getUserByEmail(email) {   
    const user = await db.User.findOne({
      where: {email},
  });
  if (!user) throw 'User not found';
  return user;
}

async function getById(id) {
    return await getUser(id);
}

async function create(params) {
    // validate
    if (await db.User.findOne({ where: { Email: params.Email } })) {
        throw 'Email "' + params.email + '" is already registered';
    }

    const user = new db.User(params);
    
    // hash password
    user.PasswordHash = await bcrypt.hash(params.Password, 10);

    // save user
    await user.save();
}

async function update(id, params) {
    const user = await getUser(id);

    // validate
    const emailChanged = params.email && user.email !== params.email;
    if (emailChanged && await db.User.findOne({ where: { email: params.email } })) {
        throw 'Email "' + params.email + '" is already registered';
    }

    // hash password if it was entered
    if (params.password) {
        params.passwordHash = await bcrypt.hash(params.password, 10);
    }

    // copy params to user and save
    Object.assign(user, params);
    await user.save();
}

async function _delete(id) {
    const user = await getUser(id);
    await user.destroy();
}

// helper functions

async function getUser(id) {
    const user = await db.User.findByPk(id);
    if (!user) throw 'User not found';
    return user;
}
module.exports = {
    getAll,
    getUserByEmail,
    getById,
    create,
    update,
    delete: _delete
};