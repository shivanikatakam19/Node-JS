function fetchData() {
    return new Promise((resolve) => {
        resolve('peanut butter');
    });
}

// Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will fail.
test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

// Alternatively, you can use async and await in your tests.
// To write an async test, use the async keyword in front of the function passed to test.
// For example, the same fetchData scenario can be tested with:
test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

//  an assertion is a statement that verifies whether a specific condition holds true during testing.
//  Assertions are fundamental to automated testing, as they confirm that your code behaves as intended. 
// In Jest, assertions are typically made using the expect function in combination with matcher methods.
test('the fetch fails with an error', async () => {
    // expect.assertions(1);
    try {
        await fetchData();
    } catch (error) {
        expect(error).toMatch('error');
    }
});

// combining async and await with .resolves or .rejects.
test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});


