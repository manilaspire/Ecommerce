const sql = require('mssql')
const config1=require('../config')

//'mssql://User:Password@ComputerName/\Instance/DatabaseName'
//Following example:
//const config = 'mssql://sa:123456@Vinicius/\SA/company';
const  config = {
    user:  config1.sql.user, // sql user
    password:  config1.sql.password, //sql user password
    server:  config1.sql.server, 
    database:  config1.sql.database,
    options: {
      trustedconnection:  true,
      trustServerCertificate: true,
      enableArithAbort:  true
    },
    port:  1433
  }
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQLServer...');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};