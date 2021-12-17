const { required } = require("nodemon/lib/config");

const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    time:Date,
    isCompleted: Boolean
})

const todomodel = mongoose.model("todos",todoSchema);

module.exports = todomodel;