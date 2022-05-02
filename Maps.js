//Maps and object have keys and values.But there is one major difference.
//Maps can have keys of any data type but object can have keys of string data type.

const person = new Map()

person.set("name","eknath")
person.set(true,"male")
console.log(person)
console.log(person.has("name"))
console.log(person.get("name"))
person.delete(true);
console.log(person)
console.log(person.size)

// Maps iteration
person.forEach((value,key)=>{console.log(key,value)})

//Efficient way to add multiple key, values in Map using 2d list([[key1,value1],[key2,value2]])

const student = new Map(
    [
        ["name","eknath"],
        ["age",23],
        [true,"male"] 
    ]
)
//Easy way to convert Object into Maps.
const obj1 = { 
    firstname:"eknath",
    lastname:"yadav"}

// Object.entries(objectName) returns nested array [[key,value]]
const objMap = new Map(Object.entries(obj1))
console.log(objMap)

//Some more methods of Map

console.log(student.entries()); // returns Map entries [[ key,value ]]
console.log([...student]) // returns nested array [[key1,value1]]
console.log(student.keys()); // returns map iterator  of keys 
console.log(student.values()) // returns  map iterator  of values