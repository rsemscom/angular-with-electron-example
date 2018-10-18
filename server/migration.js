const mysql = require('mysql');
const migration = require('mysql-migrations');

const config = require('./server.conf');

const connection = mysql.createPool(config.mysqlPoolOptions);

migration.init(connection, __dirname + '/migrations');