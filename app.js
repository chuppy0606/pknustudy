var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.locals.pretty=true;
app.set('view engine', 'jade');
app.set('vies', './views');

var OrientDB = require('orientjs');
var server = OrientDB({
host: 'localhost',
port: 2424,
username: 'root',
password: '8047'
});

var db = server.use('o2');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/template',function(req,res){
  res.render('index', {time:Date()});
});

app.get(['/topic', '/topic/:id'], function(req, res) {
  var sql = "SELECT FROM topic";
  db.query(sql).then(function(results){
    res.send(results);
  });
});

app.listen(3000,function(){
  console.log('Connected prot 3000!!!');
});
