var http = require('http');

http.createServer(function (req, res) {
    var arg = process.argv[2];
    var name = process.argv[3];
    if (arg == 'hello') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('hello ' + name);
        res.end();
    } else if (arg == 'hi') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('hi ' + name);
        res.end();
    }
}).listen(3000);