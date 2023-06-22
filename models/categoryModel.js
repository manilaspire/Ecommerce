// const { poolPromise } = require('../dataaccess/database')

// exports.read = async () => {
//     const pool = await poolPromise;
//     const rs = await pool
//         .request()
//         .query(`SELECT *
//                 FROM Category`)

//     return rs.recordset;
// }
const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        createdby: { type: DataTypes.STRING, allowNull: false },    
        updatedby: { type: DataTypes.STRING, allowNull: false },       
    };
    return sequelize.define('Category', attributes);
}