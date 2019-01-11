var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var types = [
  {
    title: "pure_node",
    description: "Execute a really primitive implementation of prime sieve in Node.js"
  }];


types.forEach(function (type) {
    app.use('/'+type.title, require('./routes/' + type.title));
});

app.get('/', function (req, res) {
  res.render('index', { routes: types});
});

var server = app.listen(3000, function () {
  console.log('Web server listing at http://localhost:%s', server.address().port);
});
