const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req, res) {
    console.log(process.argv[1]);
    var arg1 = process.argv[2];
    var filePath = path.join(__dirname, "/" + arg1);
    if(arg1 == undefined) {
        var str = "";
        /**
         * fs.readFile()是一个异步方法，执行到该句不会等待
         * 文件读取完成，就直接执行到后面的语句。
         * 回调函数是等到文件读取完成之后才执行
         */
        fs.readFile(process.argv[1], function(err, data) {
            //process.argv[1]:F:\2019-2020 the first\Nodejs\实验\实验五\fileReader1.js
            if(err) {
                console.log(err);
            }
            else {
                str = data.toString();
                res.end(str);
            }
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


