
const Connection = require("./connection");


/**
 * Option Model
 */
class Option {

    /**
     * Searches option by name and language
     *
     * @param name
     * @param langauge
     * @param callback
     */
    static getByNameAndLanguage(name, langauge, callback) {
        Connection.query(`SELECT opt_val_${langauge} as value FROM options WHERE opt_name='${name}'`, callback);
    }

}

module.exports = Option;