// rest operator kinda does opposite of spread operator
// It is used to pack multiple values in array


// syntactually it looks similar to spread operator but there is a difference.
// We use rest operator in left side unlike spread operator which is used in right side.
const [ i , j , ...others] = [ 1,2,3,4,5] // ...others packs [3,4,5]
console.log(i,j,others)


// rest operator can be used to pass multiple arguments to a function.

const add = (...n)=> { // ...n packing
    let sum = 0
    n.forEach(element => {
        sum  = sum + element
    }
    )
    return sum
}
arr = [1,2,3,4,5]
console.log(add(...arr)) // unpacking 