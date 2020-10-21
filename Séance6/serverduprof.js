var url = require('url');
var port = 1237
var http = require('http');
    http.createServer(function(request, response) {
        var message='<html><body>' +
            '<a href="http://localhost:'+ port +'/Welcome">Accueil</a> | ' +
            '<a href="http://localhost:'+ port +'/Catalogue">Catalogue</a> | '+
            '<a href="http://localhost:'+ port +'/Byebye">Catalogue</a>'
        var page = url.parse(request.url).pathname;
        response.writeHead(200); // header of the response
        if(page=="/Welcome"){
            message+='<h1>Bienvenue sur mon site</h1>';
            message+='</body></html>';
        }
        else if(page=="/Catalogue"){
            message+='<h1>Voici le catalogue</h1>';
            message+='</body></html>';
        }
        else if(page=="/Byebye"){
            message+='<h1>Bye bye</h1>';
            message+='</body></html>';
        }
        else{
            message+='<h1>Forbiden path</h1>'
            message+='</body></html>'
        }


        response.write(message); // body of the response
        response.end(); // end of the response
    }).listen(port);