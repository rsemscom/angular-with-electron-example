const express = require('express');
const config = require('./server.conf');


let app = express();

// global middleware section
require('./middlewares/headers')(app);

// modules section
require('./routes/options')(app.route('/options/*'));


app.listen(config.port);


