var http = require('http');

var server = http.createServer(function(req,res) {
    res.writeHead(200);
    res.end('HThe server is oké')
});
server.listen(1234);