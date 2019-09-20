var arg1 = process.argv[2];
if(arg1 == undefined || arg1 == "-h"){
    console.log("命令行参数应为算数运算式！");
}
else{
    var result = eval(arg1);//eval()结果为字符串形式
    console.log(arg1 + "=%s", result);
}