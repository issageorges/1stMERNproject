import express from "express"
import fs from "fs"
import Todo from "../models/Todo.js"

const route = express.Router()

route.get("/",async(req,res)=>{
    const todos = await Todo.find().populate('creator');
    res.json(todos)
})

route.post("/",async(req,res)=>{
    const todo = req.body 
    const newTodo = new Todo(todo)
    await newTodo.save()
    res.json(newTodo)
})

route.put("/:todoId",async(req,res)=>{
    const {todoId} = req.params
    const updatedData = req.body
    const updatedTodo = await Todo.findByIdAndUpdate(todoId,updatedData, {new: true})
    if (!updatedTodo) {
        return res.status(404).json({ message: "Todo not found" });
    }
    res.json(updatedTodo)

})

route.delete("/:todoId",async(req,res)=>{
    const {todoId} = req.params
    await Todo.findByIdAndDelete(todoId)
    res.json({message:"Todo deleted successfully"})
})

export default route