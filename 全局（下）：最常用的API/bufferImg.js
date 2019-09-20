const http = require("http");
const path = require("path");
const fs = require("fs");
http.createServer(function(req, res){
    var imgPath = path.join(__dirname, "/images/1.jpg");
    var imgBuffer = fs.readFileSync(imgPath);
    var base64Data = imgBuffer.toString("base64");
    var imgSrc = "data:image/jpg;base64," + base64Data;
    var htmlSrc = "<!DOCTYPE html><head></head>" + "<body><img src='" + imgSrc + "' /></body>" + "</html>";
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write(htmlSrc);
    res.end();
}).listen(8081);
console.log("server is listening 8081");