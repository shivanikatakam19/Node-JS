const lodash = require('lodash');

// Array Manipulation:
// Splits an array into chunks of a specified size.
const arr = [1, 2, 3, 4, 5, 6];
const chunkedArray = _.chunk(arr, 3);
console.log('chunked array', chunkedArray);
// Output: [[1, 2, 3], [4, 5, 6]]

// Returns an array of values that are not present in the second array.
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const diff = _.difference(arr1, arr2);
console.log('difference', diff);
// Output: [1]

// Object Manipulation:
// Creates a deep clone of an object.
const obj = { a: 1, b: { c: 2 } };
const clonedObj = _.cloneDeep(obj);
console.log('clone deep', clonedObj);
// Output: { a: 1, b: { c: 2 } }

// Recursively merges own and inherited enumerable properties of source objects into the destination object.
const object1 = { a: 1, b: { c: 3 } };
const object2 = { b: { d: 4 } };
const result = _.merge(object1, object2);
console.log('merge', result);
// Output: { a: 1, b: { c: 3, d: 4 } }

// String Manipulation:
// Converts the first character of a string to upper case.
const str = "hello world";
const capitalized = _.capitalize(str);
console.log('capitalize', capitalized);
// Output: "Hello world"

// Converts a string to kebab-case.
const kebab = _.kebabCase(capitalized);
console.log('kekab-case', kebab);
// Output: "hello-world"

// Utility Functions:
// Creates a debounced function that delays invoking the original function until after a specified wait time.
const saveInput = _.debounce((input) => {
    console.log(`Saving data debounce: ${input}`);
}, 300);

saveInput("Hello");

// Creates a throttled function that only invokes the original function at most once per specified time.
const log = _.throttle(() => console.log("Throttled!"), 1000);
log();
// Will log "Throttled!" once every second





