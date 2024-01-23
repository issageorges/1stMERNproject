import React from 'react';
import {Routes,Route} from 'react-router-dom'
import TaskList from './components/taskList'
import AddTask from './pages/add-tasks.jsx';
import { TasksProvider } from './context/tasksContext.jsx'
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Navbar from './components/nav.jsx';
import UserProvider from './context/user.context.jsx';
import Home from './pages/home.jsx';
function App() {

  return (
    <>
    <UserProvider>
    <TasksProvider>
      
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addtask" element={ <>
              <AddTask />
              <TaskList />
            </>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        

    </Routes>
    
    </TasksProvider>
    </UserProvider>
    </>

  )
}

export default App
