const dog = require("./dog.js");
var dog1 = new dog("teddy", 4);
var dog2 = new dog("zangao", 8)
function barkFun(){
    console.log(dog1.name + " barked!" + " energy:" + dog1.energy);
    console.log(dog2.name + " barked!!!" + " energy:" + dog2.energy);

}
dog1.on("bark", barkFun);
var intervalId = setInterval(function(){
    if(dog1.energy >= 0 && dog2.energy >= 0){
        dog1.emit("bark");
    }
    else{
        clearInterval(intervalId);//intervalId.unref();
    }
    dog1.energy = dog1.energy - 1;
    dog2.energy = dog2.energy - 1;
},1000)
