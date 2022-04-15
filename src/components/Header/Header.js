import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'
import { BiCart } from 'react-icons/bi';

const Header = () => {
    return (
        <div className='flex items-center justify-between h-20'>
            <Link className='pl-32' to='/'> <img width={120} src={logo} alt="" /> </Link>
            <div className='flex items-center'>
                <button><BiCart className='text-2xl mr-5 hover:text-gray-500'></BiCart></button>
                <Link className='mr-5 px-5 hover:bg-red-600 hover:text-white hover:px-5 hover:py-1 hover:rounded-full' to='login'>Login</Link>
                <Link className=' mr-5 px-5 py-1 text-white rounded-full bg-red-600' to='signup'>Sign up</Link>
            </div>
        </div>
    );
};

export default Header;