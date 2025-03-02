const express = require('express');
const { getAllTodos, createTodo } = require('../controllers/todo.controller');

const router = express.Router();

//routes

//get all todos route
router.get('/allTodos', getAllTodos)

//create a todo
router.post('/create', createTodo)

module.exports = router

