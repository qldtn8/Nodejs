var template = require('../lib/template.js');
var express = require('express');
var router = express.Router();

//route, routing
router.get('/', (req, res) => {
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(req.list);
    var html = template.html(title, list, `<h2>${title}</h2>${description}
    <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;">`, `<a href="/topic/create">create</a>`);
    res.send(html);
});

module.exports = router;