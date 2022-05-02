
// var hoisting. 
// It will be initialized to "undefined".
console.log(a) 

var a = 20

//let and const hoisting
// It will  throw an reference error: Cannot access b before intialization.
console.log(b)
console.log(c)
let b = 21
const c = 22

//function hoisting
//It will be initialized to the content of function.

console.log(add(1,2))

function add(a,b){
    return a+b
}
