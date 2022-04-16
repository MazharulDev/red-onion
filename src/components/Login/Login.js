import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'
const Login = () => {
    return (
        <div className='flex justify-center bg-img h-screen'>
        <div>
            <div className='mt-5 flex justify-center'>
                <img className='w-[20%]' width={300} src={logo} alt="" />
            </div>
            <form className='mx-auto mt-16 w-2/5'>
                <input className='bg-gray-200 p-3 rounded w-full mb-4' type="email" name="" id="" placeholder='Email' />
                <input className='bg-gray-200 p-3 rounded w-full mb-4' type="password" name="" id="" placeholder='Password' />
                
                <input className='bg-red-600 text-white p-3 rounded w-full mb-4 cursor-pointer' type="submit" value="Sign in" />
                <Link to='/signup'><p className='text-center text-red-600'>Create an account</p></Link>
            </form>
            
        </div>
    </div>
    );
};

export default Login;