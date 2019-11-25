const http = require("http");
const https = require("https");
const fs = require("fs");
const url = require("url");
const cheerio = require("cheerio");

http.createServer(function(req, res) {
    var urlObj = url.parse(req.url, true);
    var pathName = urlObj.pathname;
    if(pathName == "/") {
        var fileContent = fs.readFileSync("index.html");
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName == "/getlist") {
        https.get("https://maoyan.com/films", function(resObj) {
            var data = "";
            resObj.on("data", function(chunk) {
                data += chunk;
            });
            resObj.on("end", function() {
                // var $ = cheerio.load(result);
                // console.log($)
                // $(".movie-item-title a").each(function() {
                    
                // })
                console.log(data);
            });
        });

    }
}).listen(8081);
console.log("hello");