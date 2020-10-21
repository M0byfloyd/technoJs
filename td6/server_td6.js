var http = require('http');

var port = 9000;
var chat = "";

//HTML content 
var beginHTML = '<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8"/>\n\t</head>\n\t<body>\n';
var endHTML = '\n\t</body>\n</html>\n';

var server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(beginHTML + "<h1>Socket.io ready !</h1>" + endHTML);
    res.end();
});

var io = require("socket.io").listen(server);

io.sockets.on("connection", function(socket) {
    console.log("A new client is connected!");
    socket.on("clienttoserver", function(text) {
        chat += text + "<br/>\n";
        socket.emit("servertoclient", chat)
    })
});

server.listen(port);
console.log("Listening on port " + port);