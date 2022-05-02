// promise object.
// whenever promise is fullfilled it is resolve()
// whenver promise is not fullfilled it is reject()

function isEven(n){
    return new Promise((resolve,reject) => { 
        if(n%2 ==0){
            resolve("it is even")
        }
        else{
            reject("it is not even")
        }
    })
}

//through promise object we use then if the promise is fullfilled.
// we use catch if promise is not fullfilled.
isEven(22).then((message) => { console.log(message)})
.catch((message) => { console.log(message)})