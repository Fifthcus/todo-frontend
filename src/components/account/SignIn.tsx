import React, {useState, useContext} from 'react'
import { AuthContext } from '../../contexts/UserAuth';
import { useNavigate } from 'react-router-dom';
import AccountSignIn from './AccountSignIn';

interface SignUpProps {
  handleClick: (isOpen: boolean) => void,
}

//This is annotated the way it is to ensure the components props are inferred and eforces the type of a components props.
  const SignIn = ({ handleClick }: SignUpProps) => {
    const [email, setEmail] = useState("");
    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    }
    const [password, setPassword] = useState("");
    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    }

    //Programatically navigate away to other components.
    const navigate = useNavigate();

    //Consume context - if statement needed to prevent error related to typescript now knowing if "user, login, and logout" exists in UserAuth.tsx
    const authContext = useContext(AuthContext);
    if (!authContext) {
      throw new Error("useContext must be used within an AuthProvider");
    }
    const {login} = authContext;

    const [message, setMessage] = useState("");

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const signInObj = { email, password }

      const response = await AccountSignIn(signInObj);

      if(response && response.ok){
        login(email);
        navigate("../dashboard");
      }
      if(response.error){
          setMessage(response.error);
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
          <p onClick={() => {handleClick(false)}} className='text-neutral-600 text-center cursor-pointer hover:underline'>Create an account?</p>
        </section>
      </section>
    </>
  );
}
export default SignIn
