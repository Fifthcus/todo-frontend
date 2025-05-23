import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountSignIn from './AccountSignIn';
import { useAuth } from '../../hooks/useAuth';

interface SignUpProps {
  handleClick: (isOpen: boolean) => void,
}

  const SignIn = ({ handleClick }: SignUpProps) => {

    //Calculate user data when signing into website.
    const [email, setEmail] = useState("");
    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    }
    const [password, setPassword] = useState("");
    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    }

    //Handle signing in logic.
    const { login } = useAuth();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const userObjectToSignIn = { email, password };

      const response = await AccountSignIn(userObjectToSignIn);

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
        <section className='flex flex-col items-center gap-2 w-full'></section>
        <section className='flex flex-col gap-2 p-4 bg-neutral-50 w-11/12 md:w-7/12 lg:w-1/3 rounded-md'>
          <h1 className='text-neutral-600 text-3xl text-center'>Sign In</h1>
          {message ? <p className='text-center text-red-500'>{message}</p> : null}
          <form onSubmit={handleFormSubmit} className='flex flex-col gap-2'>
            <input type="email" name="email" value={email} onChange={handleEmailInput} placeholder='Enter an email' className='text-sm text-neutral-500 box-border border-2 border-neutral-400 rounded-md py-1'/>
            <input type="password" name="password" value={password} onChange={handlePasswordInput} placeholder='Enter a password' className='text-sm text-neutral-500 box-border border-2 border-neutral-400 rounded-md py-1'/>
            <button className='text-neutral-50 box-border bg-pastel-purple border-pastel-purple border-2 rounded-md py-1'>Sign In</button>
          </form>
        </section>
        <section className='p-4 bg-neutral-50 w-11/12 md:w-7/12 lg:w-1/3 rounded-md'>
          <p onClick={() => handleClick(false)} className='text-neutral-600 text-center cursor-pointer hover:underline'>Create an account?</p>
        </section>
      </section>
    </>
  );
}
export default SignIn
