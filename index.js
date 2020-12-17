'use strict';

const express = require('express')
const app = express();
const port = 8000;
const User 	= require("./models/user")
// let path = require('path');

mongoose.connect("mongodb://localhost/someapp-1.1", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static('public'));
app.use('/css', express.static(__dirname + "/public/css"));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/users', (req, res) => {
    res.render('users/show');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
