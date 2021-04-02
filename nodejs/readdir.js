var testFolder = 'data';    //'data'를 './data'로 바꿀 수 있다.
var fs = require('fs');

fs.readdir(testFolder, function(err, filelist) {
    console.log(filelist);
});