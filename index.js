'use strict';

const express = require('express')
const app = express();
const port = 8000;
// let path = require('path');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + "/public/css"));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
