const http = require("http");
const url = require("url");

var user = {
    "name": "user",
    "num": 3,
    "sites": [
        {}
    ]

}

http.createServer(function(req, res) {
    var strData = "";
    req.on("data", function(chunk) {
        strData += chunk;
    });
    req.on("end", function() {
        console.log(strData);
    })
}).listen(8081);
console.log("server is listening 8081");