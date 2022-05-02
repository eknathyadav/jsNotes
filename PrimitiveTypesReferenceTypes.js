var age = 20

var oldAge = age // here oldAge points to the address of age

age = 21; // here age will create a new address.

console.log(age,oldAge)


const obj1 = {  // obj1 will be stored in call stack and it's value will be a reference 
                // to the address of the object value in heap. So if there is a change 
                // in object value, only heap value will be changed not the call stack value.
    name:"eknath", 
    age : 23 
};

//const keyword doesn't allow change in call stack value. But it allows change in reference
//value.

const obj2 = obj1; // obj2 will have the reference of obj1.

obj1.age = 24 // any change in the value of obj1 will be reflected in obj2.

console.log(obj1,obj2)

