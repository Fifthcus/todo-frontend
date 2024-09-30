import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {

  const {user, logout} = useAuth();
  //If use is not logged in, redirect them back to login.
  //Programatically navigate away to other components.
  const navigate = useNavigate();
  useEffect(() => {
    if(!user){
      navigate("../");
    }
  },[]);
  const handleLogout = () => {
    logout();
    navigate("../");
  }
  console.log(user);

  return (
    <section>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
    </section>
  )
}

export default Dashboard
