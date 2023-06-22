const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        Email: { type: DataTypes.STRING, allowNull: false },
        PasswordHash: { type: DataTypes.STRING, allowNull: false },
        Title: { type: DataTypes.STRING, allowNull: false },
        FirstName: { type: DataTypes.STRING, allowNull: false },
        LastName: { type: DataTypes.STRING, allowNull: false },
        Role: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: ['passwordHash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}