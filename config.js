const dotenv = require( "dotenv" );
process.env.SQL_ENCRYPT
// read in the .env file
dotenv.config();
const { PORT,
    HOST,   
    SQL_SERVER,
    SQL_DATABASE,
    SQL_USER,
    SQL_PASSWORD,
    SQL_PORT,
    SQL_INSTANCE
 } = process.env;
 const sqlEncrypt = process.env.SQL_ENCRYPT === "true";
 module.exports = {
    port: SQL_PORT, 
    server:  SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            trustedconnection:  true,
            trustServerCertificate: true,
            enableArithAbort:  true,
            instancename:  SQL_INSTANCE 
        },
        authentication:{
            type:'default',
            options: {
                userName: SQL_USER,
                password: SQL_PASSWORD,
            },
        },
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            trustedconnection:  true,
            trustServerCertificate: true,
            enableArithAbort:  true,
            instancename:  SQL_INSTANCE 
        }
    }
 };