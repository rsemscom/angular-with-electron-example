
const Option = require('./../models/option');


/**
 * Options module.
 *
 * @param route
 */
module.exports = function(route) {

    // Options middleware
    // req.params.option will contain the current option model
    route.all(function(req, res, next) {
        let name = req.params[0];
        let lang = req.params.hasOwnProperty('1') ? req.params[1] : 'rus';

        if (name && name.length) {
            Option.getByNameAndLanguage(name, lang, function(ans) {
                if (ans) {
                    req.params.option = ans;
                    next();
                } else {
                    res.send('');
                }
            });
        } else {
            res.status(404);
            res.end();
        }
    });

    // (GET) option with key and language
    route.get(function(req, res) {
        res.send(req.params.option.value);
    });

};