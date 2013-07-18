var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = new Buffer(50);
buffer.write("Hello from buffer text", "utf-8")

app.get('/', function(request, response) {
//	response.send('Cow Goes MOO');
//	 response.send(fs.readFileSync('index.html'));
//	buffer.tostring('utf-8');
	response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
