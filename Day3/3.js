var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('test.html', function(err,data){
        if(err) {
            res.end('Error in reading file');
        } else {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            res.end();
        }
    })
}).listen(3000);