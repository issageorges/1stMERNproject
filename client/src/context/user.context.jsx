import { createContext,useContext,useEffect,useState } from "react";
import {baseUrl} from '../config/api'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const UserContext = createContext(null)
export const useUserContext = ()=> useContext(UserContext)

const UserProvider=({children})=>{
    const[user,setUser]=useState(null)
    const navigate= useNavigate()

    const registerHandler = async(e)=>{
        e.preventDefault()
        const body = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            
        }
        try{
            const {data} = await axios.post(`${baseUrl}/user/register`,body)
            navigate("/login")
        }catch(err){console.log(err)}
    }
    useEffect(()=>{
        const user= localStorage.getItem("user") 
        if(user){
            setUser(JSON.parse(user))   
          }
    },[])

    const loginHandler = async (e)=>{
        e.preventDefault()
        const body = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        try{
            const {data}= await axios.post(`${baseUrl}/user/login`,body)
            localStorage.setItem("user",JSON.stringify(data))
            setUser(data)
            navigate("/")
        }catch(err){console.log(err)}

    }
    const logoutHandler= ()=>{
        localStorage.removeItem("user")
        setUser(null)
        navigate("/")
    }

    return(
        <UserContext.Provider value={{user,loginHandler,registerHandler,logoutHandler}}>
            {children}
        </UserContext.Provider>

    )




}
export default UserProvider