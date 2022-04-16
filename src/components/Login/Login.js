import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo2.png'
const Login = () => {
    const navigate=useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        errorHooks,
      ] = useSignInWithEmailAndPassword(auth);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleEmailChange=e=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=e=>{
        setPassword(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password)
    }
    let errorElement;
    if(errorHooks){
        errorElement= <p className='text-red-600'>{errorHooks?.message}</p>
    }
    const location=useLocation();
    let from=location.state?.from?.pathname || '/';
    if(user){
        navigate(from,{replace:true});
    }
    return (
        <div className='flex justify-center bg-img h-screen'>
        <div>
            <div className='mt-5 flex justify-center'>
                <img className='w-[20%]' width={300} src={logo} alt="" />
            </div>
            <form onSubmit={handleSubmit} className='mx-auto mt-16 w-2/5'>
                <input onChange={handleEmailChange} className='bg-gray-200 p-3 rounded w-full mb-4' type="email" name=""  placeholder='Email' />
                <input onChange={handlePasswordChange} className='bg-gray-200 p-3 rounded w-full mb-4' type="password" name=""  placeholder='Password' />
                {errorElement}
                <input className='bg-red-600 text-white p-3 rounded w-full mb-4 cursor-pointer' type="submit" value="Sign in" />
                <Link to='/signup'><p className='text-center text-red-600'>Create an account</p></Link>
            </form>
        </div>
    </div>
    );
};

export default Login;