import React, { useState } from 'react'
import SignIn from '../account/SignIn'
import SignUp from '../account/SignUp'

const LogInSignUp = () => {
    const [isSignInOpen, setIsSignInOpen] = useState(true);
    const switchAccountModal = (isOpen: boolean) => {
        setIsSignInOpen(isOpen);
    }
    return (
    //I briefly received a fatal error under the 'handleClick' function, both components. It seemed to result from the fact that the prop was not being consumed in their respective components. And that they were not being annotated correctly.
    <section className='absolute w-full flex justify-center items-center h-screen'>
        {isSignInOpen ? <SignIn handleClick={switchAccountModal}/> : <SignUp handleClick={switchAccountModal}/>}
    </section>
    )
}

export default LogInSignUp