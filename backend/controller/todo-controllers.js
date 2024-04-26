const TodoModel = require("../models/todo-model");

const addTodo = async ( req, res ) => {

    try{
        const userId = req.userId;

        const { task } = req.body;

        const dbTodo = await TodoModel.create({
            userId,
            task
        });

        return res.json({
            message: "Task created successfully",
            success: true,
            dbTodo
        });

    }
    catch( err ){
        return res.json({
            message: err.message,
            success: false
        });
    }
}

const editTodo = async ( req, res ) => {

    try{

        const {id} = req.params;
        const { task, isCompleted } = req.body;

        const dbTodo = await TodoModel.findByIdAndUpdate( id ,{
            isCompleted,
            task 
        });

        return res.json({
            message: "Task edited successfully",
            success: true,
            dbTodo
        });

    }
    catch( err ){
        return res.json({
            message: err.message,
            success: false
        });
    }
}

const getSingleTodo = async ( req, res ) => {

    try{

        const {id} = req.params;

        const dbTodo = await TodoModel.findById(id);

        return res.json({
            message: "Task fetched successfully",
            success: true,
            dbTodo
        });

    }
    catch( err ){
        return res.json({
            message: err.message,
            success: false
        });
    }
}

const getUserTodo = async ( req, res ) => {

    try{

        const userId = req.userId;

        const dbTodo = await TodoModel.find({
            userId: userId
        }).sort({
            createdAt: -1
        });

        return res.json({
            message: "Task Fetched successfully",
            success: true,
            dbTodo
        });

    }
    catch( err ){
        return res.json({
            message: err.message,
            success: false
        });
    }
}

const getUserSearchTodo = async ( req, res ) => {

    try{

        const userId = req.userId;
        const {search} = req.body;

        const dbTodo = await TodoModel.find({
            userId: userId,
            task:{
                $regex: search,
                $options:"i"
            }
        }).sort({
            createdAt: -1
        });

        return res.json({
            message: "Search Task Fetched successfully",
            success: true,
            dbTodo
        });

    }
    catch( err ){
        return res.json({
            message: err.message,
            success: false
        });
    }
}

const deleteSingleTodo = async ( req, res ) => {

    try{

        const {id} = req.params;

        const dbTodo = await TodoModel.findByIdAndDelete(id);

        return res.json({
            message: "Task Deleted successfully",
            success: true,
            dbTodo
        });

    }
    catch( err ){
        return res.json({
            message: err.message,
            success: false
        });
    }
}

const deleteUserTodo = async ( req, res ) => {

    try{

        const userId = req.userId;

        const dbTodo = await TodoModel.deleteMany({
            userId: userId
        });

        return res.json({
            message: "Tasks Deleted successfully",
            success: true,
            dbTodo
        });

    }
    catch( err ){
        return res.json({
            message: err.message,
            success: false
        });
    }
}

module.exports = { addTodo , editTodo, getSingleTodo, getUserTodo, deleteSingleTodo, deleteUserTodo, getUserSearchTodo};