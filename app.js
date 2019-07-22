var createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const http = require('http');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// Models 
var models = require('./models');
models.sequelize.sync().then(function(){
    console.log('Nice! Database looks fine');
}).catch(function(err) {
    console.log(err,"Something went wrong with Database update!");
});

require('./routes')(app);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;