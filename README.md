#Node.js
```Node
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/',function(req,res){
  res.send('Hello,World!');
});
//get방식, 웹 사이트 주소 부분에 ?데이터값 이 들어가 있는 것을 확인
//localhost:3000/GET_TEST.html로 들어가서 데이터를 입력 후 확인
app.get('/get_app',function(req,res){
  res.send(req.query.num);
});
 //post방식, 웹 사이트 주소 부분에 ?데이터값 이 없는 것을 확인
 //localhost:3000/POST_TEST.html로 들어가서 데이터를 입력 후 확인
//post방식을 쓰기 위해서 bodyParser를 사용
app.post('/post_app',function(req,res){
  res.send(req.body.num);
});
app.listen(3000,function(){
  console.log('Connected prot 3000!!!');
});
```


