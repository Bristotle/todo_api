const { status } = require("express/lib/response");
const todomodel = require("../models/todoModel");



async function addTodo(request,response){
    try {
      const newTodo = await todomodel.create(request.body);
      response.status(200).json(newTodo);
    } catch (error) {
        console.log("Something went wrong",error.message);
        
    }
response.send
}

async function getAllTodo(request,response){
    try {
        const getAll = await todomodel.find();
        response.status(200).json(getAll);
        
    } catch (error) {
        console.log("Something went wrong", error.message);
        response.status(200);
    }

}
async function getTodoById(request,response){
try {
    const get1todo = await todomodel.findById(request.params.Id);
    response.status(200).json(get1todo);
    
} catch (error) {
    console.log("Something went wrong",error.message);
    
}
}

async function updateById(request,response){
    try {
        const update = await todomodel.findByIdAndUpdate(request.params.todoId,request.body);
        response.status(200).json(update);
    } catch (error) {
        console.log("Something went wrong",error.message);
        
    }

}

async function deletebyId(request,response){
    try {
        await todoModel.findByIdAndDelete(request.params.todoId);
        response.status(200).json({message:"todo deleted"});
    } catch (error) {
        console.log("Something went wrong",error.message);
        
    }

}

module.exports = {
    addTodo,
    getAllTodo,
    getTodoById,
    deletebyId,
    updateById,
    
}