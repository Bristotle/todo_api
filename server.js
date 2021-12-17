const { request, response } = require("express");
const express = require("express");
const app = express();
require("dotenv").config();
// importing mongoose
const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
//importing todoController
const todoController = require("./controllers/todoController");
const todomodel = require("./models/todoModel");

app.use(express.json());

app.get("/",(request,response)=>{
    response.status(200).json({message:"Hello Welcome to my todo API"})
});

app.patch("/todo/:todoId",todoController.updateById);

app.delete("/todo/:todoId",todoController.deletebyId);

app.post("/todo",todoController.addTodo)

// app.get("/", (request,response)=>{
//     response.send("Hello this is a get method");
// })


app.post("/",(request,response)=>{response.send("hello this is a post response")});

app.put("/",(request,response)=>{response.send("hello this is a put response")});


// app.get("/users",(request,response)=>{
//     response.send([{
//         "username":"Emmanuel Akyeam",
//         "password":"password",
//     }])

// });


// app.get("/todos",(request,response)=>{
//     response.send([{
//         "title":"Plan trip to Kumasi",
//         "description":"I will be going to Kumasi this weekend",
//         "time":"today",
//         "Iscomplete":false  
//     }]);

   

// })
app.get("/todo/:Id",todoController.getTodoById);
app.get("/todo",todoController.getAllTodo);

// listening to the request on localhost par 9009 
app.listen(9009,() => {
    console.log("My Server is Up and running on port 3000");
    // connecting to the database
    mongoose.connect(process.env.DB_URL).then(function(){
        console.log("DataBase is connected");
        // console.log("Database not connect",error);
    }).catch(function(error){
        console.log(
        `Database not connected ${error}` )

});
});