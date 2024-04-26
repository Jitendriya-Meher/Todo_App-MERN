const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    userId:{
        type: String,
        required: true,
        trim: true
    },
    task:{
        type: String,
        required: true,
        trim: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    }
},{
    timestamps:true
});

const TodoModel = mongoose.model("Todo",todoSchema);

module.exports = TodoModel;