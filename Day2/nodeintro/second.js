var http = require('http');

http.createServer(function (req, res) {
    //this can be printed twice or not depending on the browser
    console.log("this is hello world! (inside code block)");
    res.end('Hello World!');
}).listen(3000);
console.log("this is hello world again!");