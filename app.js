var createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const http = require('http');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Models 
var models = require('./models');
models.sequelize.sync().then(function(){
    console.log('Nice! Database looks fine');
}).catch(function(err) {
    console.log(err,"Something went wrong with Database update!");
});

require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;