const mysql = require('mysql');

const config = require('./../server.conf');

let connection = mysql.createPool(config.mysqlPoolOptions);

/**
 * Connection singleton to work with database
 */
class Connection {

    /**
     * Make query to database and returns first result or result (or exception if there syntax error)
     *
     * @param query
     * @param callback
     */
    static query(query, callback) {

        connection.query(query, function (error, results) {
            if (error) {
                throw error;
            } else if (results.length) {
                callback(results[0]);
            } else {
                callback(null);
            }
        });

    }
}

module.exports = Connection;