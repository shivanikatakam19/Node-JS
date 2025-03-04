// get all todolist according to the logged in user

const connection = require("../config/db")

const createTodo = async (req, res) => {
    const { title, isCompleted } = req.body;
    if (!title || !isCompleted) {
        return res.send({ success: false, message: 'Please check the fields you have entered.' });
    }
    try {
        const [data] = await connection.query("INSERT INTO todos (title, is_completed) VALUES (?, ?)", [title, isCompleted]);
        if (data) {
            return res.redirect('/')
        } else {
            console.error('Error while redirecting to home page.', error);
        }
    } catch (error) {
        console.error('Error while creating the todo.', error);
        return res.status(500).send({
            success: false,
            message: 'Error while creating the todo.'
        });
    }
};

const deleteTodo = async (req, res) => {
    const id = req.params.id
    try {
        const [data] = await connection.query("DELETE FROM todos WHERE id = ?", [id])
        if (data) {
            return res.redirect('/')
        } else {
            console.error('Error while redirecting to home page.', error);
        }
    } catch (error) {
        console.error("Error deleting todo.", error);
        res.status(500).send("Error deleting todo");
    }
};

module.exports = { createTodo, deleteTodo }