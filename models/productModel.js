const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        category: { type: DataTypes.STRING, allowNull: false },
        imageurl: { type: DataTypes.STRING, allowNull: false },
        rating: { type: DataTypes.STRING, allowNull: false },
        count: { type: DataTypes.STRING, allowNull: false },
        createdby: { type: DataTypes.STRING, allowNull: false },    
        updatedby: { type: DataTypes.STRING, allowNull: false },  
    };
    

    return sequelize.define('Product', attributes);
}