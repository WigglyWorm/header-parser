var express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    useragent = require('express-useragent');
    
    var app = module.exports = express();
    
    app.use(bodyParser.json());
    app.use(cors());
    app.use(useragent.express());
    
    var api = '/api/whoami';
    
    app.get(api, function(req, res){
       var language = req.headers["accept-language"];
       var software = 'OS: ' + req.useragent.os + ', Browser ' + req.useragent.browser;
       var ipaddress = req.ip;
       
       res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
    });
    
    app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server connected!");
})
