var http = require('http'),
  fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.readFile('./view.html', function(error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data, 'utf-8');
  });
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');