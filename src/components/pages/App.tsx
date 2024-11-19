import React, {useEffect, useState} from "react";
import LogInSignUp from "./LogInSignUp";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {login, isAuth} = useAuth()
  useEffect(() => {
    const verifyRefreshToken = async (event: any) => {
      event.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/user/persist", {
                method: "POST",
                credentials: "include",
            });
            const json = await response.json();
            if(response.ok){
                login(json.user);
                console.log("test");
            };
        } catch(error) {
            console.error(error);
        }
        finally {
            setIsLoading(false);
        } 
    }
    {!isAuth ? verifyRefreshToken(event) : setIsLoading(false);}
},[]);
  return (
    <>
    {isAuth ? <Navigate to="/dashboard"/> : null}
      <section className="relative bg-pastel-purple h-screen overflow-hidden">
        <section className="absolute w-full flex justify-center items-center mt-32">
          <p className="text-3xl text-neutral-50">To Do</p>
        </section>
        <LogInSignUp />
      </section>
    </>
  )
}

export default App