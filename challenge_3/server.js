var express = require('express')
var app = express()
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/checkout')

app.use(express.static('public'))

app.get('/', (req, res) => res.send('testing'))

app.listen(3000, () => console.log('Listening on port 3000'))