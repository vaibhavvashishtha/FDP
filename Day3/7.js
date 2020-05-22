var http = require('http');

//command line arguments
console.log(process.argv[2]);

//if argv[2] is hello then say hello Vaibhav
http.createServer(function(req,res) {
    if (process.argv[2] == 'hello') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('hello ' + process.argv[3]);
        res.end;
    } else if (process.argv[2] == 'hi') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('hi ' + process.argv[3]);
        res.end;
    } else {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('hi ' + process.argv[3]);
        res.end;
    }
}).listen(3000);

function createResponse() {
    
}
