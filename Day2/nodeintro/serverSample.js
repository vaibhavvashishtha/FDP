var http = require('http');
var log = require('./log.js');
http.createServer(function (req, res) {
    log.info;
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('This is the admin Page.');
        res.end();
    }
    log.debug;
}).listen(3000);