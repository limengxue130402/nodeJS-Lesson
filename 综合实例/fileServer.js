const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req, res){
    var filePath1 = path.join(__dirname, "/素材/index.html");
    res.end(fs.readFileSync(filePath1)); 
    
}).listen(8081);