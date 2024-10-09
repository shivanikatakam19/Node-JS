
let promise = new Promise(function (resolve, reject) {
    const x = "promises";
    const y = "callbacks"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

// we can pass parameters for the then and catch functions

promise.
    // here "then" is executed when promise is resolved
    then(function () {
        console.log('single promise: Success');
    }).
    // catch is executed when promise is rejected
    catch(function () {
        console.log('single promise: Some error has occurred');
    });


// handling multiple promises:

// 1. using promise.all()
let promise1 = Promise.resolve('Hello')
let promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('World')
    }, 1000)
})

Promise.all([promise1, promise2]).then(values => console.log(values))

// Output: [ 'Hello', 'World'

// but we have one drawback in the promise.all() if anyone of the promise is rejected then promise.all() will be also rejected
let promiseResolve = Promise.resolve('promise')
let promiseresolve1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('resolved')
    }, 1000)
})

let promiseReject = new Promise((_, reject) => {
    setTimeout(() => {
        reject('promise all: rejected')
    }, 2000)
})

Promise.all([promiseResolve, promiseresolve1, promiseReject])
    .then((results) => console.log(results))
    .catch((error) => console.log(error));
// Output: rejected


// 2. using promise.isSettled()
// The advantage of this method is that when a promise is rejected it will not reject remaining.
const promiseIsSettledResolve1 = Promise.resolve('promise isSettled: First Promise');
const promiseIsSettledReject = Promise.reject('promise isSettled: Second Promise Failed');
const promiseIsSettledResolve2 = Promise.resolve('promise isSettled: Third Promise');

Promise.allSettled([promiseIsSettledResolve1, promiseIsSettledReject, promiseIsSettledResolve2])
    .then((results) => console.log(results));

// Output:
// [
//   { status: 'fulfilled', value: 'First Promise' },
//   { status: 'rejected', reason: 'Second Promise Failed' },
//   { status: 'fulfilled', value: 'Third Promise' }
// ]


// 3. using promise.race()
// returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.
const promiseRace1 = new Promise((resolve) => setTimeout(resolve, 1000, 'promise race: First'));
const promiseRace2 = new Promise((resolve) => setTimeout(resolve, 2000, 'promise race: Second'));

Promise.race([promiseRace1, promiseRace2])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
// Output: 'First'


// 4. using promise.any()
// returns a promise that resolves as soon as any of the promises resolves, ignoring rejected promises.
//If all promises reject, it will reject with an AggregateError.
const promiseany1 = Promise.reject('Error 1');
const promiseany2 = Promise.reject('Error 2');
const promiseany3 = Promise.resolve('Success');

Promise.any([promiseany1, promiseany2, promiseany3])
    .then((result) => console.log('promise any: ' + result))
    .catch((error) => console.log('promise any: ' + error))
    // finally method allows you to execute code once a promise is settled (either resolved or rejected), useful for cleanup tasks.
    .finally(() => console.log('promise any: Promise settled'));
// Output: 'Success'
// promise any: Promise settled
// If all promises reject : AggregateError: All promises were rejected


// Chaining Promises:
function chainingPromises() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())   // Parse the response as JSON
        .then((data) => {
            console.log('Chaining Promises 1: ' + data);  // Log the data
            return fetch('https://jsonplaceholder.typicode.com/todos/2');
        })
        .then((response) => response.json())   // Fetch and process the second data
        .then((data) => console.log('Chaining Promises 2: ' + data))
        .catch((error) => console.error('Error chaining promises:', error));  // Handle errors
}

chainingPromises();