const express = require('express');
const { authMiddleware } = require('../middlewares/auth-middleware');
const { addTodo, getUserTodo, getSingleTodo, editTodo, deleteUserTodo, getUserSearchTodo } = require('../controller/todo-controllers');
const todoRoutes = express.Router();

todoRoutes.route("/add").post(authMiddleware, addTodo);
todoRoutes.route("/user").get(authMiddleware, getUserTodo);
todoRoutes.route("/:id").get(authMiddleware, getSingleTodo);
todoRoutes.route("/edit/:id").patch(authMiddleware, editTodo);
todoRoutes.route("/deleteall").delete(authMiddleware, deleteUserTodo);
todoRoutes.route("/search").post(authMiddleware, getUserSearchTodo);

module.exports = todoRoutes;