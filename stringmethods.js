// dynamic string

var firstname = "eknath";
var lastname = "yadav";

var greeting = `Good Morning ${firstname} ${lastname}`;
console.log(greeting);

// String methods.

//includes(): checks whether the substring is present or not 
var s = "abcdc";
console.log(s.includes("bcd")); // returns true

//indexOf() : returns the index of substring in a string
console.log(s.indexOf("dc")); 

//startsWith() : check if a string starts with some sequence of characters
console.log(s.startsWith("abc")) // returns true

//trim() : removes the extra spaces from a string
var r = "   abc   ";
console.log(r.trim(r)); //returns "abc"

//slice 
console.log(s.slice(1,4))

//some more methods
// toUpperCase(), toLowerCase()


