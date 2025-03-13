// Often while writing tests you have some setup work that needs to happen before tests run,
// and you have some finishing work that needs to happen after tests run.
// Jest provides helper functions to handle this.

// For example, if both initializeFsData() and clearFsData() returned promises,
//  and the city database could be reused between tests, we could change our test code to:

var fs = require('fs');

function initializeCityArray() {
    fs.appendFile('describe_logs.txt', 'Initialized the test to run in describe \n', function (err) {
        if (err) throw err;
    });
}

function initializeFsData() {
    fs.appendFile('logs.txt', 'Initialized the test to run \n', function (err) {
        if (err) throw err;
    });
}

function clearFsData() {
    fs.appendFile('logs.txt', 'successfully completed the test \n', function (err) {
        if (err) throw err;
    });
}

function isCity(city) {
    let cityArray = ['Vienna', 'San Juan', 'Newyork']
    return cityArray.includes(city)
}

beforeEach(async () => {
    await initializeFsData();
});

afterEach(async () => {
    await clearFsData();
});

test('if array contains the mentioned city', () => {
    expect(isCity('Vienna')).toBeTruthy()
});

test('if does not contains the mentioned city', () => {
    expect(isCity('Test')).not.toBeTruthy()
});


describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
        return initializeCityArray();
    });

    test('if array contains the mentioned city in describe', () => {
        expect(isCity('Vienna')).toBeTruthy()
    });

    test('if does not contains the mentioned city in describe', () => {
        expect(isCity('Test')).not.toBeTruthy()
    });
});