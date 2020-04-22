"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controllers/todo");
const router = express_1.Router();
router.get('/', todo_1.createTodo);
router.get('/all', todo_1.getTodos);
router.patch('/:id');
router.delete('/:id');
exports.default = router;
