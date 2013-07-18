var express = require('express');
var js = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//	response.send('Cow Goes MOO');
	 response.send(fs.readFileSync('index.html'));
	//response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
