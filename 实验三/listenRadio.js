const radio = require("./radio");
var radio1 = new radio("music radio", "FM 106.7");
function opened() {
    console.log(radio1.name + " " + radio1.FM + " opened");
}

function closed() {
    console.log(radio1.name + "" + radio1.FM + " closed");
}

radio1.on("opened", opened);
radio1.on("closed", closed);
radio1.emit("opened");
setTimeout(function(){console.log("lalala...")},2000);
setTimeout(function(){radio1.emit("closed");},2001);
