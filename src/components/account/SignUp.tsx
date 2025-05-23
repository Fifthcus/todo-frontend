import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountSignUp from './AccountSignUp';
import { useAuth } from '../../hooks/useAuth';

interface SignUpProps {
    handleClick: (isOpen: boolean) => void,
}

const SignUp = ({ handleClick }: SignUpProps) => {
   
    //Calculate user data to create the user an account.
    const [username, setUsername] = useState("");
    const handleUsernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }
    const [email, setEmail] = useState("");
    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const [password, setPassword] = useState("");
    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const [verifyPassword, setVerifyPassword] = useState("");
    const handleVerifyPasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVerifyPassword(event.target.value);
    }

    //Handle signing up logic.
    const { login } = useAuth();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userObjectToSignUp = { username, email, password, verifyPassword }

        const response = await AccountSignUp(userObjectToSignUp);
        if(response && response.ok){
            login(response.user);
            navigate("../dashboard");
        }
        if(response.message){
            setMessage(response.message);
        }
    }
    return (
    <>
        <section className='flex flex-col items-center gap-2 w-full'>
            <section className='flex flex-col gap-2 p-4 bg-neutral-50 w-11/12 md:w-7/12 lg:w-1/3 rounded-md'>
                <h1 className='text-neutral-600 text-3xl text-center'>Sign Up</h1>
                {message ? <p className='text-center text-red-500'>{message}</p> : null}
                <form onSubmit={handleFormSubmit} className='flex flex-col gap-2'>
                    <input type="text" name="username" value={username} onChange={handleUsernameInput} placeholder='Enter a username' className='text-sm text-neutral-500 box-border border-2 border-neutral-400 rounded-md py-1'/>
                    <input type="email" name="email" value={email} onChange={handleEmailInput} placeholder='Enter an email' className='text-sm text-neutral-500 box-border border-2 border-neutral-400 rounded-md py-1'/>
                    <section className='flex flex-col lg:flex-row gap-2'>
                        <input type="password" name="password" value={password} onChange={handlePasswordInput} placeholder='Enter a password' className='text-sm text-neutral-400 box-border border-2 border-neutral-400 rounded-md py-1 w-full'/>
                        <input type="password" name="verifyPassword" value={verifyPassword} onChange={handleVerifyPasswordInput} placeholder='Enter password again' className='text-sm text-neutral-500 box-border border-2 border-neutral-400 rounded-md py-1 w-full'/>
                    </section>
                    <button className='text-neutral-50 box-border border-2 bg-pastel-purple border-pastel-purple rounded-md py-1'>Sign Up</button>
                </form>
            </section>
            <section className='p-4 bg-neutral-50 w-11/12 md:w-7/12 lg:w-1/3 rounded-md'>
                <p onClick={() => handleClick(true)} className='text-neutral-600 text-center cursor-pointer hover:underline'>Have an account?</p>
            </section>
        </section>
    </>
    )
}

export default SignUp
