

// this is the normal way to return a value for a function but what if we have to execute a task after getting the result from an operation
// then we have to use call back functions

// function add(a, b) {
//     return a + b
// }

// console.log(add(3, 5))

// here add is the higher order function

function add(a, b, callback) {
    let result = a + b
    callback(result)
}

add(3, 4, function (val) {
    console.log('callback result', val)
})

// the above function is similar to the below one's

// function add(a, b) {
//     let result = a + b
//     showResult(result)
// }

// function showResult(result) {
//     console.log('another function', result)
// }

// add(2, 4)