var express = require('express');  //express 모듈 로드
var app = express();   //express 모듈의 express 함수 사용
var port = 3000;
var bodyParser = require('body-parser');
var fs = require('fs');
var compression = require('compression');
var helmet = require('helmet')
app.use(helmet());


var indexRouter = require('./routes/index');
var topicRouter = require('./routes/topic');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get('*', function(req, res, next) {
    fs.readdir('./data', function (err, filelist) {
        req.list = filelist;
        next();
    });
});

app.use('/', indexRouter);
app.use('/topic', topicRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});