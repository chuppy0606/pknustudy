  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
  console.log('Connected prot 3000!!!');
  app.get('/',function(req,res){
    res.send("Success");
  });
  app.listen(3000,function(){
});
