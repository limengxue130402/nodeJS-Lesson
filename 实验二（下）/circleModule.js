function circleFun(r){
   function circumference() {
        return 2*Math.PI*r;
   }
   function area() {
        return Math.PI*r*r;
   }
   return {circumference: circumference, area: area};
}
circleFun(1);
module.exports = {
    circleFun: circleFun
}