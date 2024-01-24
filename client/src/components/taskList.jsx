import  { useContext, useEffect } from 'react';
import TaskItem from './taskItem';
import { TasksContext } from '../context/tasksContext';
import axios from 'axios';
import { baseUrl } from '../config/api';

export default function TaskList() {

    const { tasks ,setTasks} = useContext(TasksContext)
   

  return (
    <div>{tasks.map(task=>(
        <TaskItem key={task._id} task={task}/>
    ))}</div>
  )
}
