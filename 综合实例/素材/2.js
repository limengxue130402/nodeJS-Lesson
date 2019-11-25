const http = require("http");
const fs =require("fs");
const path = require("path");
const url = require("url");

http.createServer(function(req,res){
    //将客户端的网页响应到后端
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    console.log(urlPathName);
    if(urlPathName == "/"){
        var htmlPath = path.join(__dirname,"/index.html");
        var htmlContent = fs.readFileSync(htmlPath);
        res.writeHead(200,"content-Type:textml");
        res.write(htmlContent);
        res.end();
    }else if(urlPathName == "/1.png"){
        var imgPath = path.join(__dirname,"/1.png");
        //console.log(imgPath);
        fs.readFile(imgPath,function(err,data){
            if(err){
                console.log("图片不可以加载!");
            }else{
                res.writeHead(200,{"Content-Type":"image/png"});
                res.write(data);
                res.end();
            }
        })
    }

}).listen(8081);
console.log("页面正在加载...");