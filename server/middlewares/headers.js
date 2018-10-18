
/**
 * Middleware to append cross-domain headers
 *
 * @param app
 */
module.exports = function(app) {

    // appends cross-domain headers to every request
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

};