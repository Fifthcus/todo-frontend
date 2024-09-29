import React, { useState, useContext, useEffect } from 'react'
import SignIn from '../account/SignIn'
import SignUp from '../account/SignUp'
import { AuthContext } from '../../contexts/UserAuth'
import { useNavigate } from 'react-router-dom';

const LogInSignUp = () => {
    const [isSignInOpen, setIsSignInOpen] = useState(true);
    const switchAccountModal = (isOpen: boolean) => {
        setIsSignInOpen(isOpen);
    }
    //Programatically navigate away to other components.
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error("useContext must be used within an AuthProvider");
    }
    const { user } = authContext;
    useEffect(() => {
        if(user){
            navigate("../dashboard");
        }
    },[]);
    return (
    //I briefly received a fatal error under the 'handleClick' function, both components. It seemed to result from the fact that the prop was not being consumed in their respective components. And that they were not being annotated correctly.
    <section className='absolute w-full flex justify-center items-center h-screen'>
        {isSignInOpen ? <SignIn handleClick={switchAccountModal}/> : <SignUp handleClick={switchAccountModal}/>}
    </section>
    )
}

export default LogInSignUp