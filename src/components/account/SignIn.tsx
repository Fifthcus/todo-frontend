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
      <section className='flex flex-col gap-2 w-1/2'>
        <h1 className='text-3xl text-center'>Sign In</h1>
        <form onSubmit={handleFormSubmit} className='flex flex-col gap-2'>
          <input type="email" name="email" value={email} onChange={handleEmailInput} placeholder='Enter an email' className='text-neutral-500 box-border border-2 border-neutral-50 rounded-md py-1'/>
          <input type="password" name="password" value={password} onChange={handlePasswordInput} placeholder='Enter a password' className='text-neutral-500 box-border border-2 border-neutral-50 rounded-md py-1'/>
          <button className='box-border border-2 border-neutral-50 rounded-md py-1'>Sign In</button>
        </form>
        <p className='text-center cursor-pointer hover:underline'>Have an account?</p>
      </section>
    </>
  )
}

export default SignIn
