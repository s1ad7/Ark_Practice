let a = 5;
let b = 10;
let c = 15


let safeSpot = a;   
a = b;
b = c              
c = safeSpot;

console.log("After rotating:", "a =", a, "b =", b, "c =", c);



// a takes on b old value
//  b takes on c old value
// c takes on a old value


var x = 10;
if (true) {
  var x = 20;
}
console.log(x);


let nu = 5;

if (nu == "5"){
    console.log("True")
}


let pass = "word";
let name = "word"

if (pass.length >= 8) {
    console.log("Password is strong")
}
else if (pass.includes(name)) {
    console.log("you cant put ur name in password");
}
else {
    console.log("Password is Weak")
}


let Num = 100;

if (Num %2 == 0) {
    console.log("Even")
}
else {
    console.log("odd")
}


console.log("a");
setTimeout(function (){
    console.log("b");
}, 2000); 
console.log("c");
// Output: a c b


export function add(a, b) {
  return a + b;
}

import { add } from './math.mjs';

console.log(add(2, 3)); // Output: 5
