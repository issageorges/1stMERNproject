import express from "express";
import Todo from"../models/Todo.js"
import Note from "../models/Note.js";

const route =express.Router()



route.post("/:todoId/:userId",async(req,res)=>{
    const todoId= req.params.todoId
    const userId =req.params.userId
    const content = req.body.note

    const newNote = new Note({
        content,
        user:userId,
        todo:todoId,
    })
    await newNote.save()
    await newNote.populate("user")
    const todo = await Todo.findById(todoId)
    todo.notes += 1
    await todo.save()
    res.json(newNote)
})

route.get('/find/many/:todoId',async(req,res)=>{
    const todoId = req.params.todoId
    const notes = await Note.find({todo: todoId}).populate("user")
    res.json(notes)
}
)
export default route