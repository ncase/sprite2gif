var express = require('express');
var app = express();
app.use("/", express.static(__dirname + '/demo'));
var port = process.env.PORT || 80;
app.listen(port);
console.log('Express server started on port '+port);