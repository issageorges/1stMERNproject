import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../config/api';
import { useUserContext } from './user.context';

export const TasksContext = createContext();

export const TasksProvider = ({children})=>{
    const [tasks,setTasks]= useState([])
    const{user }= useUserContext()
    
    const getTasks = async()=>{
        try{
            const res = await axios.get(baseUrl+"/todos")
            setTasks(res.data)
           
        }catch(err){console.log(err)}
    }
    
    useEffect(()=>{
        
        getTasks()
    },[])

    const addTask = async (e)=>{
        e.preventDefault()
        const description= e.target.description.value
        if(!description) return alert("please add task")
        const res = await axios.post(`${baseUrl}/todos`, { description,creator:user._id });
        setTasks([...tasks,res.data])
        e.target.reset()
        getTasks()

       
    }

    const deleteTask = async(id)=>{
        try{
            const res= await axios.delete(`${baseUrl}/todos/${id}`);
            alert(res.data.message);
            const newTasks = tasks.filter((task) => task._id !== id);
            setTasks(newTasks)
            getTasks()

        }catch(err){console.log(err);}
    }
 
    const updateTask = async(id,updatedDescription)=>{
        try{
            const res = await axios.put(`${baseUrl}/todos/${id}`, { description: updatedDescription })
            const updatedTasks = tasks.map(task => task._id === id ? res.data : task);
            setTasks(updatedTasks)
            getTasks()

        }catch(err){console.log(err)}
    }

    return(
        <TasksContext.Provider value={{ tasks, addTask, deleteTask ,updateTask}}>
            {children}
        </TasksContext.Provider>
    )



}

