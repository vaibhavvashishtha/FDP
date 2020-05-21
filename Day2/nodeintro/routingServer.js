var http = require('http');
var log = require('./log.js');
http.createServer(function (req, res) {
    //logging in console
    log.info;
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('This is the home Page.');
        res.end();
    }else if (req.url == '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('This is the admin Page.');
        res.end();
    } else if (req.url == '/teacher') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('This is the teacher Page.');
        res.end();
    } else if (req.url == '/student') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('This is the student Page.');
        res.end();
    } else {
        res.end("invalid request");
    }
    log.debug;
}).listen(3000);