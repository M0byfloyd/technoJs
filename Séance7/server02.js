// load the http module in a variable

var http=require('http');
var url=require('url');
var querystring=require('querystring');

// port
var port=56789;

// HTML content
var beginHTML='<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t</head>\n\t<body>\n';
var html ='';
var endHTML='\n\t</body>\n</html>\n';

// create the server listening on port 4567
var server1 = http.createServer(
  function (req, res) {
    console.log('Request URL: '+req.url);
    console.log('Parsing the URL: '+url.parse(req.url).query);
    var params=querystring.parse(url.parse(req.url).query);
    html += '<h1> Bienvenue !</h1>'
    if(params['firstname'] != null) {
        
        html += '<h2>Tom prénom est '+ params['firstname'] ;
        if (params['lastname'] != null) {
                html += html += ' et ton nom est '+ params['lastname'] +'</h2>';
        }
        else {
            html += '</h2>';
        }
    }
    else {
        if(params['lastname'] != null) {
            html+= '<h2>Ton nom est' + params['lastname'] +'</h2>';
        }
    } 
    if(params['age'] != null) {

    }


    console.log(JSON.stringify(params));
    res.end(beginHTML+ html +endHTML);

  }
).listen(port, function () {
        // Display a message in the console
        console.log('listening  on port '+port+'...');
      }
);