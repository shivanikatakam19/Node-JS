const express = require('express');
const app = express()
const supertest = require('supertest')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/users', (req, res) => {
    res.status(200).json({
        users: [
            {
                name: 'shivani',
                age: 25
            }
        ]
    })
})

app.post('/users', (req, res) => {
    const { name, age, email } = req.body
    res.status(201).json({
        users: [
            {
                id: 1,
                name: name,
                age: age,
                email: email
            }
        ]
    })
})

let server;

beforeAll((done) => {
    // Start the server before any tests run
    server = app.listen(3000, () => {
        done();
    });
});

afterAll((done) => {
    // Close the server after all tests have run
    server.close(() => {
        done();
    });
});

test('get users api', async () => {
    const response = await supertest(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body.users).toBeInstanceOf(Array);
    expect(response.body.users[0]).toHaveProperty('name', 'shivani');
    expect(response.body.users[0]).toHaveProperty('age', 25);
});

test('post users api', async () => {
    const response = await supertest(app).post('/users').send({ name: 'shivani', age: 25, email: 'shivani@gmail.com' });
    expect(response.status).toBe(201);
    expect(response.body.users[0]).toEqual({ id: 1, name: 'shivani', age: 25, email: 'shivani@gmail.com' })
})
