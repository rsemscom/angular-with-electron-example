/**
 * Server configuration
 *
 * @type Object
 */
module.exports = {
    port: 8080,
    mysqlPoolOptions: {
        connectionLimit : 100,
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'pagebox'
    }
};