const tedious = require('tedious');
const { Sequelize } = require('sequelize');

const config = require('../config');

module.exports = db = {};

initialize();

async function initialize() {
    const dialect = 'mssql';
    const host = "RVSKCH381LT";
    const dbname="ECommerce";
    // create db if it doesn't already exist
    await ensureDbExists("ECommerce");

    // connect to db
    const sequelize = new Sequelize(dbname, config.sql.user, config.sql.password, { host, dialect });

    // init models and add them to the exported db object
    db.User = require('../models/userModel')(sequelize);
    db.Category = require('../models/categoryModel')(sequelize);
    db.Product = require('../models/productModel')(sequelize);

    // sync all models with database
    await sequelize.sync({ alter: true });
}

async function ensureDbExists(dbName) {
    return new Promise((resolve, reject) => {
        const connection = new tedious.Connection(config);
        connection.connect((err) => {
            if (err) {
                console.error(err);
                reject(`Connection Failed: ${err.message}`);
            }

            const createDbQuery = `IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '${dbName}') CREATE DATABASE [${dbName}];`;
            const request = new tedious.Request(createDbQuery, (err) => {
                if (err) {
                    console.error(err);
                    reject(`Create DB Query Failed: ${err.message}`);
                }

                // query executed successfully
                resolve();
            });

            connection.execSql(request);
        });
    });
}
