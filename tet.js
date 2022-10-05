var express = require('express');
var app = express();
app.get('/', function (req, res) {
	res.send({ name : "Mwamuzi"})
});
app.listen(5000);




