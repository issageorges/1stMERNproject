import { useUserContext } from "../context/user.context";

export default function Login() {
    const { loginHandler } = useUserContext();
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-8 bg-blue-100 rounded shadow">
                <h1 className="text-2xl font-bold mb-8 text-center">Login</h1>
                <form onSubmit={loginHandler} className="flex flex-col gap-6">
                    <div>
                        <label htmlFor="email" className="text-gray-700">Email:</label>
                        <input className="border-2 border-gray-300 w-full p-3 rounded mt-2 focus:border-gray-500 focus:outline-none" type="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-gray-700">Password:</label>
                        <input className="border-2 border-gray-300 w-full p-3 rounded mt-2 focus:border-gray-500 focus:outline-none" type="password" name="password" />
                    </div>
                    <button type="submit" className="border-2 border-blue-500 text-blue-700 py-2 px-4 rounded hover:bg-gray-100">Submit</button>
                </form>
            </div>
        </div>
    );
}
