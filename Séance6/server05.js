var http = require('http');

var server = http.createServer(function(req,res) {
    res.writeHead(200, {'ContentType':'text/html'});
    res.write("<p>Hello <em> Pustule </em> </p>")
    res.end()
});
server.listen(1235);