// get all todolist according to the logged in user

const connection = require("../config/db")

const getAllTodos = async (req, res) => {
    try {
        const data = await connection.query('SELECT * FROM todos');
        return res.render('all-todos', { todos: data })
    } catch (error) {
        console.log(error)
        res.send({ success: false, message: 'Error while fetching the todos.' })
    }
}

const createTodo = async (req, res) => {
    const { title, isCompleted } = req.body
    if (!title || !isCompleted) {
        return res.send({ success: false, message: 'Please check the fields you have entered.' })
    }
    const data = connection.query(`INSERT INTO todos (title, is_completed) values`, [title, isCompleted])
    if (!data) {
        return res.status(404).send({ success: false, message: 'Error while creating the todo.' })
    } else {
        const allTodos = connection.query('SELECT * FROM todos');
        return res.render('all-todos', { todos: allTodos })
    }
}

module.exports = { getAllTodos, createTodo }