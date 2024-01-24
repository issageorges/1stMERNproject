import { useState, useContext } from 'react';
import { TasksContext } from '../context/tasksContext';


export default function AddTask() {
    const [description, setDescription] = useState('');
    const {addTask} = useContext(TasksContext)




    const handleDelete = async(id)=>{
        try{
          const res =  await axios.delete(`${baseUrl}/todos/${task._id}`);
          alert(res.data.message)
          const newTask = tasks.filter((task)=>task._id !== id)
        }catch(err){console.log(err)}
    }

  return (
    <div className="flex justify-center mt-10">
    <form onSubmit={addTask} className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 p-4 rounded shadow-lg w-1/2">
        <input
            type="text"
            name="description"
            placeholder="Add a new task"
            className="w-full p-2 mb-3 border border-gray-400 rounded"
        />
        <button type="submit" className="w-full border border-purple-500 text-purple-500 py-2 rounded hover:bg-purple-500 hover:text-white transition duration-300">
            Add Task
        </button>
    </form>
</div>

  )
}
