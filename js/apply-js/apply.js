// var inch = 157;
// var feet = inch / 12;
// console.log(feet);
// console.log(feet);

function inchToFeet(inch){
    feet = inch / 12;
    return feet;
}

var result = inchToFeet(157);
var roundResult = Math.round(result);
var celiResult = Math.ceil(result);

console.log(result);
console.log(roundResult);
console.log(celiResult);