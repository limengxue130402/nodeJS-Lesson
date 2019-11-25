const http = require("http");
const path = require("path");
const fs = require("fs");
var fileName = process.argv[2];
var filePath = path.join(__dirname, "/" + fileName);
http.createServer(function(req, res) {
    if(fileName == undefined) {
        var reader = fs.createReadStream(process.argv[1]);
        reader.pipe(res);
    }
    else {
        if(fs.existsSync(filePath)) {
            var reader1 = fs.createReadStream(filePath);
            reader1.pipe(res);
        }
        else {
            res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
            res.end("该文件不存在！");
        }
    }

}).listen(8081);