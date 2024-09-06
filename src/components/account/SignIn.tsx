import React, {useState} from 'react'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const [password, setPassword] = useState("");
  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("YOU ARE SIGNED IN");
  }
  return (
    <>
      <section className='flex flex-col gap-2 p-4 bg-neutral-50 w-11/12 md:w-9/12 lg:w-1/3'>
        <h1 className='text-neutral-600 text-3xl text-center'>Sign In</h1>
        <form onSubmit={handleFormSubmit} className='flex flex-col gap-2'>
          <input type="email" name="email" value={email} onChange={handleEmailInput} placeholder='Enter an email' className='text-sm text-neutral-500 box-border border-2 border-neutral-400 rounded-md py-1'/>
          <input type="password" name="password" value={password} onChange={handlePasswordInput} placeholder='Enter a password' className='text-sm text-neutral-500 box-border border-2 border-neutral-400 rounded-md py-1'/>
          <button className='text-neutral-50 box-border bg-pastel-purple border-pastel-purple border-2 rounded-md py-1'>Sign In</button>
        </form>
        <p className='text-center text-neutral-500 cursor-pointer hover:underline'>Have an account?</p>
      </section>
    </>
  )
}

export default SignIn
