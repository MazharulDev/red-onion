import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'
import { BiCart } from 'react-icons/bi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth);
    }
    return (
        <div className='container flex items-center justify-between h-20 mx-auto'>
            <div className='pl-10'>
                <Link to='/'> <img width={120} src={logo} alt="" /> </Link>
            </div>
            <div className='flex items-center'>
                <Link to='/cart' className='mt-2'><button><BiCart className='text-2xl mr-5 hover:text-red-600'></BiCart></button></Link>
                {user ? <button className='mr-5 px-5 hover:bg-red-600 hover:text-white hover:px-5 hover:py-1 hover:rounded-full' onClick={handleSignOut}>Sign Out</button> :
                    <div>
                    <Link className='mr-5 px-5 hover:bg-red-600 hover:text-white hover:px-5 hover:py-1 hover:rounded-full' to='login'>Login</Link>
                    <Link className=' mr-5 px-5 py-1 text-white rounded-full bg-red-600 hover:bg-red-700' to='signup'>Sign up</Link>
                </div>
                }
            </div>
        </div>
    );
};

export default Header;