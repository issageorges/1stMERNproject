import express from "express"
import User from "../models/User.js"

const route = express.Router()

route.post("/register",async(req,res)=>{
    const user = req.body
    const newUser = new User(user)
    await newUser.save()
    res.json(newUser)
})

route.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const findUser = await User.findOne({email})
    if(!findUser) return res.status(404).send("user not found")
    if (findUser.password !== password) return res.status(400).send("wrong password or email")

    res.json(findUser)
})

export default route