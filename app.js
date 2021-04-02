var express = require('express');
var app = express();
var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';

AWS.config.getCredentials(function(err) {
	if(err) console.log(err.stack);
	else console.log("Access key:", AWS.config.credentials.accessKeyId);
});

var ec2 = new AWS.EC2();

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.listen(80, () => {
	console.log('Connect 80 port');
});

