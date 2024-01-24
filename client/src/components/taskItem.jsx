import  { useContext, useState } from 'react';
import { TasksContext } from '../context/tasksContext';
import { ThumbsUp,XCircle, Trash2,MessageSquare } from "lucide-react";
import { useUserContext } from '../context/user.context'

export default function TaskItem({task}) {
    const { user } = useUserContext()
    const {deleteTask, updateTask }=useContext(TasksContext)
    const [isEditing, setIsEditing] =useState(false)
    const [editDescription, setEditDescription] = useState(task.description);
    const [isCompleted, setIsCompleted] = useState(false)
    const handleDelete = async()=>{
      
         await deleteTask(task._id)
          
    }
    const handleUpdate = async () => { 
      await updateTask(task._id, editDescription)
      setIsEditing(false)
    }

    const toggleCompleted = () =>{
      setIsCompleted(!isCompleted)
    }

//     console.log("Task:", task);
// console.log("User:", user);
//   return (
    
//     <div className="bg-white p-3 my-2 rounded shadow-md border border-gray-300 max-w-md mx-auto">
//         {isEditing ? (
//             <div className="flex flex-col items-start">
//                 <input
//                     type="text"
//                     value={editDescription}
//                     onChange={(e) => setEditDescription(e.target.value)}
//                     className="p-2 mb-2 w-full border border-gray-400 rounded"
//                 />
//                 <div className="flex space-x-2">
//                     <button onClick={handleUpdate} className="border border-green-500 text-green-500 py-1 px-2 rounded hover:bg-green-500 hover:text-white">
//                         Save
//                     </button>
//                     <button onClick={() => setIsEditing(false)} className="border border-gray-400 text-gray-400 py-1 px-2 rounded hover:bg-gray-400 hover:text-white">
//                         <XCircle />
//                     </button>
//                 </div>
//             </div>
//         ) : (
//             <div className="flex items-center space-x-3">
//                 <p className={`flex-grow text-gray-700 ${isCompleted ? 'line-through' : ''} cursor-pointer`}
//                     onClick={toggleCompleted} 
//                 >{task.description}</p>



//                 {user && user._id === task.creator._id && (
//                 <div>
//                     <button onClick={() => setIsEditing(true)} className="border border-yellow-500 text-yellow-500 p-1 rounded hover:bg-yellow-500 hover:text-white">
//                     <MessageSquare />
//                 </button>
//                 <button onClick={handleDelete} className="border border-red-500 text-red-500 p-1 rounded hover:bg-red-500 hover:text-white">
//                     <Trash2 />
//                 </button>
//                 </div>
//                  )}

//                   <div>Created by: {task.creator.name}</div>



                
//             </div>

            


//         )}
    
//     </div>
//   )

return (
    <div className="bg-white p-3 my-2 rounded shadow-md border border-gray-300 max-w-md mx-auto">
        {isEditing ? (
            <div className="flex flex-col items-start">
                <input
                    type="text"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    className="p-2 mb-2 w-full border border-gray-400 rounded"
                />
                <div className="flex space-x-2">
                    <button onClick={handleUpdate} className="border border-green-500 text-green-500 py-1 px-2 rounded hover:bg-green-500 hover:text-white">
                        Save
                    </button>
                    <button onClick={() => setIsEditing(false)} className="border border-gray-400 text-gray-400 py-1 px-2 rounded hover:bg-gray-400 hover:text-white">
                        Cancel
                    </button>
                </div>
            </div>
        ) : (
            <div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <p className={`text-gray-700 p-2 ${isCompleted ? 'line-through' : ''} cursor-pointer`}
                            onClick={toggleCompleted} 
                        >{task.description}</p>
                        <span className="text-sm text-gray-500">Created by:  <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300">{task.creator.name}</span></span>
                    </div>
                    {user && user._id === task.creator._id && (
                        <div className="flex space-x-2 items-center">
                            <button onClick={() => setIsEditing(true)} className="border border-yellow-500 text-yellow-500 p-1 rounded hover:bg-yellow-500 hover:text-white">
                                <MessageSquare size={16} />
                            </button>
                            <button onClick={handleDelete} className="border border-red-500 text-red-500 p-1 rounded hover:bg-red-500 hover:text-white">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )}
    </div>
);
}
