
// async/await is syntactic sugar for working with promises that allows you to write asynchronous code in a synchronous-looking manner.
// async functions return a promise, and await can be used inside these functions to pause execution until a promise resolves.

console.log('start')
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
        const data = await response.json();
        console.log(data);  // Output fetched data
    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.log('Fetch complete');
    }
}

console.log('end')

fetchData();

// Output:
// start
// end
// {
//   id: 3,
//   name: 'Clementine Bauch',
//   username: 'Samantha',
//   email: 'Nathan@yesenia.net',
//   address: {
//     street: 'Douglas Extension',
//     suite: 'Suite 847',
//     city: 'McKenziehaven',
//     zipcode: '59590-4157',
//     geo: { lat: '-68.6102', lng: '-47.0653' }
//   },
//   phone: '1-463-123-4447',
//   website: 'ramiro.info',
//   company: {
//     name: 'Romaguera-Jacobson',
//     catchPhrase: 'Face to face bifurcated interface',
//     bs: 'e-enable strategic applications'
//   }
// }
// Fetch complete