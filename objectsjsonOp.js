// objects operation

var obj = { firstname : "eknath", lastname  : "yadav"
,1:20};


//Object.keys(object) returns list of keys/Properties
console.log(Object.keys(obj));

//Object.values(object) returns list of values of each key
console.log(Object.values(obj));

//JSON operations

//JSON.stringfy(object) : converts the object into a string
var s = JSON.stringify(obj);
console.log(s);

//JSON.parse(object) : converts the string into a object
console.log(JSON.parse(s))
