import { Link } from 'react-router-dom';
import { Home, LogOut, SquarePen } from 'lucide-react';
import { useUserContext } from '../context/user.context';
import logo from '../assets/logo.png';

export default function Navbar() {
    const { logoutHandler, user } = useUserContext();

    return (
        <nav className='flex items-center justify-center p-4 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 shadow rounded'>
            <div className='absolute left-4'>
                <img src={logo} alt="Logo" className="w-24 h-8"/>
            </div>
            <div className='flex gap-6'>
                <Link className='hover:underline cursor-pointer flex justify-center items-center gap-1 text-white'
                    to='/'>
                    <Home className='w-4 h-4 lg:w-8 lg:h-8'></Home> Home
                </Link>
                {user && (
                    <Link className='hover:underline cursor-pointer flex justify-center items-center gap-1 text-white'
                        to="/addtask">
                        <SquarePen className='w-4 h-4'/> Tasks
                    </Link>
                )}
                {user ? (
                    <button className='hover:underline cursor-pointer flex justify-center items-center gap-1 text-white'
                            onClick={logoutHandler}>
                        <LogOut className='w-4 h-4' /> Logout
                    </button>
                ) : (
                    <>
                        <Link className='hover:underline cursor-pointer flex justify-center items-center gap-1 text-white'
                            to='/login'>Login</Link>
                        <Link className='hover:underline cursor-pointer flex justify-center items-center gap-1 text-white'
                            to='/register'>Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
