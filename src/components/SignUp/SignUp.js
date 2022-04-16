import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {FcGoogle} from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'

const SignUp = () => {
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        errorHooks,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
    const handleNameChange=e=>{
        setName(e.target.value);
    }
    const handleEmailChange=e=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange=e=>{
        setPassword(e.target.value)
    }
    const handleConfirmPasswordChange=e=>{
        setConfirmPassword(e.target.value)
    }
    const handleSubmit=e=>{
        e.preventDefault();
        if(password !== confirmPassword){
            setError('Your two password did not match')
            return;
        }
        createUserWithEmailAndPassword(email,password)
    }
 
    return (
        <div className='flex justify-center bg-img h-screen'>
            <div>
                <div className='mt-5 flex justify-center'>
                    <img className='w-[20%]' width={300} src={logo} alt="" />
                </div>
                <form onSubmit={handleSubmit} className='mx-auto mt-16 w-2/5'>
                    <input onChange={handleNameChange} className='bg-gray-200 p-3 rounded w-full mb-4' type="text" name="" id="" placeholder='Name' />
                    <input onChange={handleEmailChange} className='bg-gray-200 p-3 rounded w-full mb-4' type="email" name="" placeholder='Email' />
                    <input onChange={handlePasswordChange} className='bg-gray-200 p-3 rounded w-full mb-4' type="password" name=""  placeholder='Password' />
                    <input onChange={handleConfirmPasswordChange} className='bg-gray-200 p-3 rounded w-full mb-4' type="password" name=""  placeholder='Confirm Password' />
                    <p className='text-red-600'>{error}</p>
                    <p className='text-red-600'>{errorHooks}</p>
                    <input className='bg-red-600 text-white p-3 rounded w-full mb-4 cursor-pointer' type="submit" value="Sign up" />
                    <Link to='/login'><p className='text-center text-red-600'>Already have an account</p></Link>
                </form>
                <div className='mx-auto mt-5 w-2/5'>
                    <button className='bg-white border-black border p-3 rounded-full w-full mb-4 cursor-pointer flex items-center justify-center'><FcGoogle className='mr-3'/>Sign in with google</button>
                    <button className='bg-black text-white p-3 rounded-full w-full mb-4 cursor-pointer flex items-center justify-center'><AiFillGithub className='mr-3'/> Sign in with github</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;