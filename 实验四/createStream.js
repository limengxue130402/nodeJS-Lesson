const stream = require("stream");
const util = require("util");
var reader = new stream.Readable();
function MyReadable(){

};
util.inherits(MyReadable, reader);
reader.pipe(process.stdout);