import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircleUserRound, CheckCircle, XCircle } from "lucide-react";
import { baseUrl } from "../config/api";
import axios from "axios";
import { useUserContext } from "../context/user.context";

export default function Todo() {
    const {todoId} = useParams();
    const [todo, setTodo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [notes, setNotes] = useState([]);
    const {user} = useUserContext();

    const getTodo = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${baseUrl}/todos/${todoId}`);
            setTodo(response.data);
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
    };

    const getNotes = async () => {
        try {
            const response = await axios.get(`${baseUrl}/note/find/many/${todoId}`);
            setNotes(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTodo();
        getNotes();
    }, [todoId]);

    const createNoteHandler = async (e) => {
        e.preventDefault();
        const note = e.target.note.value;
        if (!note) return alert("Please enter a note");

        setIsLoading(true);
        try {
            const body = { note };
            const response = await axios.post(`${baseUrl}/note/${todoId}/${user._id}`, body);
            setNotes([...notes, response.data]);
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
        e.target.reset();
    };

    return todo ? (
        <div className="bg-gray-100">
            <div className="max-w-2xl mx-auto p-8">
                <h1 className="text-3xl font-bold text-center my-4 border-b-2 border-gray-300 pb-2">{todo.title}</h1>
                <p className="text-lg font-semibold text-center my-2">Creator: <span className="font-normal">{todo.creator.name}</span></p>

                <p className="text-lg font-semibold text-center my-2">Status: 
                    <span className={`font-normal ${todo.isCompleted ? 'text-green-500' : 'text-red-500'}`}>
                        {todo.isCompleted ? 'Completed' : 'Not Completed'}
                        {todo.isCompleted ? <CheckCircle className="inline ml-1" /> : <XCircle className="inline ml-1" />}
                    </span>
                </p>
                <p className="my-4 p-4 border border-gray-300 rounded">{todo.content}</p>

                <hr className="my-6 border-t border-gray-300" />

                {user && (
                    <form onSubmit={createNoteHandler} className="flex flex-col gap-4 p-2">
                        <textarea name="note" className="w-full h-32 border border-gray-300 p-2 rounded" />
                        <button disabled={isLoading} className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-2 px-4 rounded">
                            {isLoading ? "Loading..." : "Add Note"}
                        </button>
                    </form>
                )}

                <div>
                    <h3 className="text-2xl font-bold text-center my-4 border-b-2 border-gray-300 pb-2">Notes</h3>
                    <ul className="space-y-4">
                        {notes.map((note) => (
                            <li key={note._id} className="border border-gray-300 p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <CircleUserRound className="text-blue-500" />
                                    <p className="font-bold">{note.user.name}</p>
                                    <p className="text-sm text-gray-500">{note.createdAt}</p>
                                </div>
                                <p>{note.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ) : (
        <h1 className="text-3xl font-bold text-center py-8">Loading...</h1>
    );
}
