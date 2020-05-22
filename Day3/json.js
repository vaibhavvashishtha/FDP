var fs = require('fs');

var buf = fs.readFileSync('json.json');
var data = buf.toString();
var dataJSON = JSON.parse(data);
console.log(data);
console.log(dataJSON);
