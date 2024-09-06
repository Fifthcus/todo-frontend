import React, {useState} from 'react'

const SignUp = () => {
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
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("YOU ARE SIGNED IN");
    }
    return (
    <>
        <section className='flex flex-col gap-2 w-1/2'>
        <h1 className='text-3xl text-center'>Sign Up</h1>
        <form onSubmit={handleFormSubmit} className='flex flex-col gap-2'>
            <input type="text" name="username" value={username} onChange={handleUsernameInput} placeholder='Enter a username' className='text-neutral-500 box-border border-2 border-neutral-50 rounded-md py-1'/>
            <input type="email" name="email" value={email} onChange={handleEmailInput} placeholder='Enter an email' className='text-neutral-500 box-border border-2 border-neutral-50 rounded-md py-1'/>
            <section className='flex flex-col lg:flex-row gap-2'>
                <input type="password" name="password" value={password} onChange={handlePasswordInput} placeholder='Enter a password' className='text-neutral-500 box-border border-2 border-neutral-50 rounded-md py-1 w-full'/>
                <input type="password" name="verifyPassword" value={verifyPassword} onChange={handleVerifyPasswordInput} placeholder='Enter password again' className='text-neutral-500 box-border border-2 border-neutral-50 rounded-md py-1 w-full'/>
            </section>
            <button className='box-border border-2 border-neutral-50 rounded-md py-1'>Sign In</button>
        </form>
        <p className='text-center cursor-pointer hover:underline'>Have an account?</p>
        </section>
    </>
    )
}

export default SignUp
