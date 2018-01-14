// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

var api = "/api/whoami";

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res){
  res.sendFile("_dir/public/index.html");
});

app.get("api", function (req, res) {

  var ipaddress = req.ip;
  
  res.json({
    "ipaddress": ipaddress
  });
  
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
