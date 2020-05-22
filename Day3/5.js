//events
var fs = require('fs');

var rs = fs.createReadStream('dummy.txt');
rs.on('open',function(err,data) {
    console.log('event triggered: ' + data);
});