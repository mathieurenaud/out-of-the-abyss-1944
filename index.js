var http = require('http')

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type' : "text/plain"});
    response.end("Hello World 2\n");
}).listen(process.env.PORT);