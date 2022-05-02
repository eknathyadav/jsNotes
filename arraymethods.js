// Array methods

var arr = [5,2,6,1,10,4];

// general syntax.
//arr.methodName(someFunction)
// this function takes three arguments currentItem, indexOfCurrentItem and 
// orginal array. For reduce method, the function has one extra starting 
// paramter called total: which retains the value of previously called function.


//.map(function) : returns a new array by performing certain operations on 
// each element

var evenOddBool = arr.map(evenCheck);

console.log(evenOddBool)
function evenCheck(currentItem,index,originalArray){
    console.log(index,originalArray)
    return currentItem%2 == 0
}

//.filter(function) : filter out elements from the array if the function 
// returns true for the current element.

var onlyEven = arr.filter(filterEven);

function filterEven(currentItem){
    return currentItem%2 == 0
}
console.log(onlyEven)

// .every(function) : returns true if all the elements in an array
// satisfy some condition or else it returns false

var isNumber = arr.every(checkNumber);

function checkNumber(currentItem){
    return typeof currentItem == "number";
}
console.log(isNumber);

//.some(function) : returns true if at least one element in an array satisfies
// some condition

// .sort() by default the sort function sort the values as if they are 
// string. So for array of numbers the sorting will give us wrong ans. So
// we have to pass one extra function to sort the values correctly.

console.log(arr.sort()); // sorts in lexicographical order

console.log(arr.sort( (a,b) => { return a-b })); // sorts in ascending order

console.log(arr.sort( (a,b) => { return a-b })); // sorts in descending order


//reduce(function) : helps us to reduce the array into some value.
// its function takes total as an argument, it retains the value of previous
//function call.

var sum = arr.reduce( (total,currentItem) => { return total + currentItem},0);
console.log(sum);

//forEach(function) : Similar to map function. The only difference is, it 
// doesn't return anything.

arr.forEach((currentItem,index) => { console.log(`${currentItem} ${index}`) });




