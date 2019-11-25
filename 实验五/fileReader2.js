const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req, res) {
    var arg1 = process.argv[2];
    var filePath = path.join(__dirname, "/" + arg1);
    if(arg1 == undefined) {
        fs.open(process.argv[1], "r+", function(err, fd) {
            var statObj = fs.statSync(process.argv[1]);
            var buf = Buffer.alloc(statObj.size);
            fs.read(fd, buf, 0, statObj.size, 0, function(err, by, buf) {
                if(err) {
                    console.log(err);
                }
                else {
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            })
        })
    }
    else {
        if(fs.existsSync(filePath)) {
            fs.readFile(filePath, function(err, data) {
                if(err) {
                    res.end(err);
                }
                else {
                    res.end(data.toString());
                }
            })
        }
        else {
            res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
            res.end("该文件不存在！");
        }
    }
}).listen(8081);

