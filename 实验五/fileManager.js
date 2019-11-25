const fs = require("fs");
const path = require("path");
console.log("创建文件夹：");
process.stdin.on("data", function(data) {
    var cmd = data.toString();
    var cmdArr = cmd.split(" ");
    switch(cmdArr[0]) {
        case "mkdir":
            fs.mkdirSync(cmdArr[1].slice(0, -2));
            console.log("文件目录创建成功！！");
            break;
        case "touch":
            var filePath = path.join(__dirname, "/filedir/file.txt");
            fs.writeFileSync(filePath, "hello node");
            console.log("文件创建成功！！");
            break;
        case "delete":
            var filePath = path.join(__dirname, "/filedir/file.txt");
            fs.unlinkSync(filePath);
            console.log("文件删除成功！！");
            break;
        default:
            console.log("something erro");
            break;
    }
})