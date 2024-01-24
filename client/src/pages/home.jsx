import { useUserContext } from "../context/user.context";
import biglogo from '../assets/biglogo.png'; 
import { Link } from "react-router-dom";
export default function Home() {
    const { logoutHandler, user } = useUserContext()
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 p-10'>
                <img src={biglogo} alt="Big Logo" className="w-full max-w-md lg:max-w-lg" />
                <div className='max-w-lg text-center lg:text-left'>
                    {user && <h1 className='text-3xl pb-5 font-bold'>Welcome,
                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300"> {user.name}!</span></h1>}
                    <h2 className='text-2xl font-bold mb-4'>Optimize Your Team's Productivity</h2>
                    <div className='mb-4'>
                        <h3 className='font-semibold'>Collaborate on Tasks Seamlessly</h3>
                        <p>Empower your team with real-time task updates, allowing every member to add, track, and complete tasks efficiently, fostering a dynamic and collaborative work environment.</p>
                    </div>
                    <div className='mb-4'>
                        <h3 className='font-semibold'>Engage in Constructive Discussions</h3>
                        <p>Encourage clear communication and idea exchange with an integrated commenting system on each task, ensuring everyone is on the same page.</p>
                    </div>
                    <div className='mb-4'>
                        <h3 className='font-semibold'>Manage Workloads with Ease</h3>
                        <p>Utilize intuitive task management tools designed for teams, enabling a balanced distribution of work and streamlined task completion.</p>
                    </div>
                    {user ? (<button onClick={logoutHandler} className="text-red-500 font-bold pt-5"> Sign out</button>) : (<Link to='/login' className=" text-blue-500 font-bold pt-5">Sign in</Link>)}
                </div>
            </div>
        </div>
    );
}


