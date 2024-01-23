import  { useContext } from 'react';
import TaskItem from './taskItem';
import { TasksContext } from '../context/tasksContext';



export default function TaskList() {

    const { tasks } = useContext(TasksContext)
    console.log('Tasks:', tasks); // Log the tasks
    console.log('Type of tasks:', typeof tasks)

  return (
    <div>{tasks.map(task=>(
        <TaskItem key={task._id} task={task}/>
    ))}</div>
  )
}
