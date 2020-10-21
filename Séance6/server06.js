//load the http library
var http = require('http');

var url = require('url')
// defining the port number (should be <65536 and >1023)
var port=3000;
// defining html start and end
var html_start='<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<title>My HTML5 page</title>\n\t\t<meta charset="utf-8" />\n\t\t<link rel="stylesheet" type="text/css" href="style/mon_theme.css" />\n\t\t<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>\n\t</head>\n\t<body>\n';
var html_end='\n\t</body>\n</html>';
// create a listening server
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(html_start+'\t\t<p>Hello <em>World</em>!</p>'+html_end); // body of the response
    response.end(); // end of the response
}).listen(port);
// writing a text in the console
console.log('Listening on port '+port+'...');