var http= require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("Hello I am here to Explore NodeJs");
}).listen(8080);
