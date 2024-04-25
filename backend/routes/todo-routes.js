const express = require('express');
const { authMiddleware } = require('../middlewares/auth-middleware');
const { addTodo, getUserTodo, getSingleTodo, editTodo, deleteUserTodo } = require('../controller/todo-controllers');
const todoRoutes = express.Router();

todoRoutes.route("/add").post(authMiddleware, addTodo);
todoRoutes.route("/user").get(authMiddleware, getUserTodo);
todoRoutes.route("/:id").get(authMiddleware, getSingleTodo);
todoRoutes.route("/edit/:id").patch(authMiddleware, editTodo);
todoRoutes.route("/deleteall").delete(authMiddleware, deleteUserTodo);

module.exports = todoRoutes;