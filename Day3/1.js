var fs = require('fs');

var data = fs.readFileSync('dummy.txt');
console.log(data.toString());