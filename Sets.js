arr = [ 2 , 3 ,2 ,2 ]

const arrUnique  = new Set(arr) // It takes iterable as arguement
console.log(arrUnique.has(3))
arrUnique.add(4)
arrUnique.delete(2)
arrUnique.forEach( element=> console.log(element))