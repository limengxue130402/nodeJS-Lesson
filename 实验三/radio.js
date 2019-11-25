const events = require("events");
var eventEmitter = events.EventEmitter;
function Radio(name, FM) {
    eventEmitter.call(this);
    this.name = name;
    this.FM = FM;
    this.play = function() {
        console.log("opened")
    }
    this.stop = function() {
        console.log("closed")
    }
}
Radio.prototype = eventEmitter.prototype;
module.exports = Radio;