var fs = require('fs');

fs.readFile('dummy.txt', function(err,data) {
    if (err) throw err;
    console.log(data.toString());
});
console.log('hello');