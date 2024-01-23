import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../config/api';

export const TasksContext = createContext();

export const TasksProvider = ({children})=>{
    const [tasks,setTasks]= useState([])

    useEffect(()=>{
        const getTasks = async()=>{
            try{
                const res = await axios.get(baseUrl+"/todos")
                setTasks(res.data)
            }catch(err){console.log(err)}
        }
        getTasks()
    },[])

    const addTask = async (description)=>{
        const res = await axios.post(`${baseUrl}/todos`, { description });
        setTasks([...tasks,res.data])

    }

    const deleteTask = async(id)=>{
        try{
            const res= await axios.delete(`${baseUrl}/todos/${id}`);
            alert(res.data.message);
            const newTasks = tasks.filter((task) => task._id !== id);
            setTasks(newTasks)
        }catch(err){console.log(err);}
    }
 
    const updateTask = async(id,updatedDescription)=>{
        try{
            const res = await axios.put(`${baseUrl}/todos/${id}`, { description: updatedDescription })
            const updatedTasks = tasks.map(task => task._id === id ? res.data : task);
            setTasks(updatedTasks)
        }catch(err){console.log(err)}
    }

    return(
        <TasksContext.Provider value={{ tasks, addTask, deleteTask ,updateTask}}>
            {children}
        </TasksContext.Provider>
    )



}

