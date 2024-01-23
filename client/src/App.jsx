import React from 'react';
// import {Routes,Route} from 'react-router-dom'
import TaskList from './components/taskList'
import AddTask from './components/addTask'
import { TasksProvider } from './context/tasksContext.jsx'
function App() {

  return (
    <>
    
    <TasksProvider>
        <AddTask />
        <TaskList />
    </TasksProvider>
    {/* <Routes> */}
    {/* </Routes> */}
    
     {/* <Routes> */}
     {/* <Route path="/" element={<Home/>}/> */}
     {/* </Routes> */}
    </>

  )
}

export default App
