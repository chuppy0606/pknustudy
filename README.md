![alt tag](https://d2eip9sf3oo6c2.cloudfront.net/series/covers/000/000/015/full/node-fundamentals.jpg?1431962287)
Get&Post
==========
```Node
var express = require('express');
var app = express();
```
>Express module express **binding**
```node
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
```
> body-parser section
```
app.use(express.static('public'));
```
> static
```node
app.get('/',function(req,res){
  res.send('Hello,World!');
});
```
```node
>get방식, 웹 사이트 주소 부분에 ?데이터값 이 들어가 있는 것을 확인
>localhost:3000/GET_TEST.html로 들어가서 데이터를 입력 후 확인
app.get('/get_app',function(req,res){
  res.send(req.query.num);
});
```
> post방식, 웹 사이트 주소 부분에 ?데이터값 이 없는 것을 확인
> localhost:3000/POST_TEST.html로 들어가서 데이터를 입력 후 확인
> post방식을 쓰기 위해서 **bodyParser**를 사용
```
app.post('/post_app',function(req,res){
  res.send(req.body.num);
});
```
> 서버를 연결.
```node
app.listen(3000,function(){
  console.log('Connected prot 3000!!!');
});
```

참고자료
========
Callback : https://webapplog.com/node-patterns-from-callbacks-to-observer <br />
Es6 : http://hacks.mozilla.or.kr/2016/07/es6-in-depth-the-future <br />
Cmder : http://programmingsummaries.tistory.com/352

