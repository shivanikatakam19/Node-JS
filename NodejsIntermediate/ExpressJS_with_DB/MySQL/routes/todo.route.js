const express = require('express');
const { createTodo, deleteTodo } = require('../controllers/todo.controller');

const router = express.Router();

//routes

router.get("/create", (req, res) => {
    return res.render("add-todo");
});

//create a todo
router.post('/add-new', createTodo)

router.get('/delete/:id', deleteTodo)

module.exports = router

