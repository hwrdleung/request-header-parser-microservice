// server.js
// where your node app starts

// init project
var express = require('express');
var useragent = require('express-useragent');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(useragent.express());

var api = "/api/whoami";

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res){
  res.sendFile("_dir/public/index.html");
});

app.get(api, function (req, res) {

  var ipaddress = req.ip;
  var languages = req.acceptsLanguages();
  var software = req.useragent.os;
  
  res.json({
    "ipaddress": ipaddress,
    "languages": languages[0],
    "software": software
  });
  
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
