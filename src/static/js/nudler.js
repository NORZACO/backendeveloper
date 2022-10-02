var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (requesting, responding) {
  responding.writeHead(200, {'Content-Type': 'text/html'});
  var context = {
    name : "Julian", age : 22, school : "Christania"
  }
  responding.end("context");
}).listen(8000);





http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var context = {
    name : "Julian", age : 22, school : "Christania"
  }


  res.write(context);
  res.end();
}).listen(8080);











// server.on('listening',function(){
//     console.log('ok, server is running');
// });