'use strict';
// unpacking of array

var arr = ["eknath","yadav"];
var [firstname,lastname] = arr; //unpacked
console.log(firstname,lastname)

// unpacking of object

var objs = { firstname : "eknath", lastname  : "yadav"};
var {firstname:fname,lastname:lname} = objs;   // unpacked objects

console.log(fname,lname);