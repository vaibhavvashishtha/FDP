var http = require('http');
var log = require('./log.js');
http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('This is the admin Page.');
        res.end();
    }

}).listen(3000);