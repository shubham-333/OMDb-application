var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var omdbRouter = require('./routes/omdb');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));
app.use('/omdb', omdbRouter);
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


module.exports = app;
