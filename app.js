var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.locals.pretty=true;
app.set('view engine', 'jade');
app.set('views', './views');

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
  res.render('index', {time:Date});
});

app.get(['/topic', '/topic/:id'], function(req, res){
  var sql = 'SELECT FROM topic';
  db.query(sql).then(function(topics){
    // console.log(topics[1]);
    var sql = 'SELECT FROM topic WHERE @rid=:rid';
    var id = req.params.id;
    db.query(sql, {params:{rid:id}}).then(function(topic){
      console.log(topic);
      res.render('index', {topics:topics, topic:topic[0]});
    });
  });
})

app.listen(3000,function(){
  console.log('Connected port 3000!!!');
});
