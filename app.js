var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

var user = [
  {
    username: 'egoing',
    password:'111'
    // password:'698d51a19d8a121ce581499d7b701668'
  }
]

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/',function(req,res){
  res.send('Hello,World!');
});

app.post('/auth/register', function(req,res){
  var user = {
    username:'egoing',
    password:'111'
  };

  var uname = req.body.username
  var pwd = req.body.password

  if(uname === user.username && pwd === user.password){
    res.send('Hello master');
  } else {
    res.send('Who are you?');
  }
});

app.listen(3000,function(){
  console.log('Connected prot 3000!!!');
});
