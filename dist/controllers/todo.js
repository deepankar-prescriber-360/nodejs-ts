"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../models/todo");
const TODOS = [];
exports.createTodo = (req, res, next) => {
    const text = req.query.text;
    console.log(text);
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    return res.status(201).json({ success: true, message: "Created the todo:" });
};
exports.getTodos = (req, res, next) => {
    return res.status(201).json({ success: true, data: TODOS });
};
