const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
var imgPath = path.join(__dirname, "/素材/1.png");
var filePath = path.join(__dirname, "/素材/index.html");
http.createServer(function(req, res) {
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    if(urlPathName == '/') {
        // fs.readFile(filePath, function(err, data) {
        //     res.writeHead(200, {"Content-Type": "text/html"});
        //     res.write(data);
        //     res.end();
        // })
        var fileContent = fs.readFileSync(filePath);
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(fileContent);
        res.end();
    }
    else if(urlPathName == "/getdata") {
        var list = [{"username": "zhangsan", "age": 20}];
        var str = JSON.stringify(list);
        res.end(str);
    }
    else if(urlPathName == "/1.png"){
        fs.readFile(imgPath, function(err, data) {
            res.writeHead(200, {"Content-Type": "image/png"});
            res.write(data);
            res.end();
        })
    }
    
}).listen(8081);


// http.createServer(function(req, res) {
//     var fileContent = fs.readFileSync(filePath);
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.write(fileContent);
//     res.end();
// }).listen(8081)
console.log("server is listening 8081");



