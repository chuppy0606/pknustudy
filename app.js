var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var md5 = require('md5');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;


var user = [
  {
    username: 'egoing',
    password:'111'
    // password:'698d51a19d8a121ce581499d7b701668'
    
  }
]

var OrientDB = require('orientjs');
var server = OrientDB({
host: 'localhost',
port: 2424,
username: 'root',
password: '8047'
});

var db = server.use('o2');


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

app.get('/',function(req,res){
  res.send('Hello,World!');
});

app.get(['/topic', '/topic/:id'], function(req, res) {
  var sql = "SELECT FROM topic";
  db.query(sql).then(function(results){
    res.send(results);
  });
});

passport.serializeUser(function(user, done) {
  console.log('serializeUser', user);
  done(null, user.username);
});

passport.deserializeUser(function(id, done) {
  console.log('deserializeUser', id);
  for(var i = 0; i < users.length; i++) {
    var user = users[i];
    if(user.username === id) {
      done(null, user);
    }
  }
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('Ok');
  }
));
passport.use(new FacebookStrategy({
    clientID: '279324999175591',
    clientSecret: '28c324819c17b9c228ec839b374fa5ca',
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({facebookId: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
            passport.authenticate('facebook', { successRedirect: '/',
                                          failureRedirect: '/login' }));  

app.post('/auth/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login' }));


app.listen(3000,function(){
  console.log('Connected prot 3000!!!');
});
