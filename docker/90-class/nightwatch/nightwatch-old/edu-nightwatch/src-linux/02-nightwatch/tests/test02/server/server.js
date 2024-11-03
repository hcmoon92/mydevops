var http = require('http');
var fs = require('fs');
var text = fs.readFileSync('html5form.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(text);
}).listen(8081);
