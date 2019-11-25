const htpps = require("https");
const cheerio = require("cheerio");
htpps.get("https://maoyan.com/films", function(res) {
    var result = "";
    res.on("data", function(chunk) {
        result += chunk;
    });
    res.on("end", function() {
        console.log(result);
    });
    
    const $ = cheerio.load(result);
    console.log($.html());
    console.log("bjnmiwobsdvnscmiwohfned");
});




