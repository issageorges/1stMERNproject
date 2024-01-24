import { useUserContext } from "../context/user.context";

export default function Register() {
    const { registerHandler } = useUserContext();
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-8 bg-green-100 rounded shadow">
                <h1 className="text-2xl font-bold mb-8 text-center">Register</h1>
                <form onSubmit={registerHandler} className="flex flex-col gap-6">
                    <div>
                        <label htmlFor="name" className="text-gray-700">Name:</label>
                        <input className="border-2 border-gray-300 w-full p-3 rounded mt-2 focus:border-gray-500 focus:outline-none" type="text" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-700">Email:</label>
                        <input className="border-2 border-gray-300 w-full p-3 rounded mt-2 focus:border-gray-500 focus:outline-none" type="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-gray-700">Password:</label>
                        <input className="border-2 border-gray-300 w-full p-3 rounded mt-2 focus:border-gray-500 focus:outline-none" type="password" name="password" />
                    </div>
                    <button type="submit" className="border-2 border-green-500 text-green-700 py-2 px-4 rounded hover:bg-gray-100">Submit</button>
                </form>
            </div>
        </div>
    );
}
