import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo2.png'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import PageTitle from '../Shared/PageTitle/PageTitle';
const Login = () => {
    const [signInWithGoogle, userWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userWithGitHub, loadingWithGitHub, errorWithGitHub] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        errorHooks,
    ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    let errorElement;
    if (errorHooks || errorWithGitHub) {
        errorElement = <p className='text-red-600'>{errorHooks?.message}</p>
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    if (user || userWithGoogle || userWithGitHub) {
        navigate(from, { replace: true });
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleGitHubSignIn = () => {
        signInWithGithub()
    }
    return (
        <div className='flex justify-center bg-img h-screen'>
            <div>
                <PageTitle title="login"></PageTitle>
                <div className='mt-5 flex justify-center'>
                    <img className='w-[20%]' width={300} src={logo} alt="" />
                </div>
                <form onSubmit={handleSubmit} className='mx-auto mt-16 w-2/5'>
                    <input onChange={handleEmailChange} className='bg-gray-200 p-3 rounded w-full mb-4' type="email" name="" placeholder='Email' />
                    <input onChange={handlePasswordChange} className='bg-gray-200 p-3 rounded w-full mb-4' type="password" name="" placeholder='Password' />
                    {errorElement}
                    <input className='bg-red-600 text-white p-3 rounded w-full mb-4 cursor-pointer' type="submit" value="Sign in" />
                    <Link to='/signup'><p className='text-center text-red-600'>Create an account</p></Link>
                </form>
                <div className='mx-auto mt-5 w-2/5'>
                    <button onClick={handleGoogleSignIn} className='bg-white border-black border p-3 rounded-full w-full mb-4 cursor-pointer flex items-center justify-center'><FcGoogle className='mr-3' />Sign in with google</button>
                    <button onClick={handleGitHubSignIn} className='bg-black text-white p-3 rounded-full w-full mb-4 cursor-pointer flex items-center justify-center'><AiFillGithub className='mr-3' /> Sign in with github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;