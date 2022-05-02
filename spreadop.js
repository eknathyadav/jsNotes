// "..." : basically unpack or spread all the elements of an object or an array
// It can be used for multiple purpose

// to convert strings into array.

var a = "12345";

var arr = [...a]; 

console.log(arr);

// to concatenate array and objects. Note: It can't concatenate nested objects.

var arr1 = [1,2,3,4,5];
var arr2 = [10,10,10];

console.log(...arr1)
var arr3 = [...arr1,...arr2];

console.log(arr3);

obj1 = {name: "eknath",
        rollno: 27};
obj2 = {address:"Ghatkopar"}

obj3 = { ...obj1, ...obj2}

obj3 = { ...obj3 , clg:"Kc "}
console.log(obj3)
obj3 = { ...obj3 , clg:"RJ "}
console.log(obj3)
