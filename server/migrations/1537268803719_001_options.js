/**
 * Creating a table in the database
 * @type {{up: string, down: string}}
 */
module.exports = {
    "up": "CREATE TABLE options (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, opt_name CHAR(200), opt_val_rus CHAR(200), opt_val_eng CHAR(200))",
    "down": "DROP TABLE options"
};