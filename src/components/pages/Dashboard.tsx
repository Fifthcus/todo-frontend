import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Nav from '../utils/Nav';

const Dashboard = () => {

  const {user, logout} = useAuth();
  //If use is not logged in, redirect them back to login.
  //Programatically navigate away to other components.
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("../");
  }

  return (
    <section className='h-screen flex-col'>
      <Nav />
    </section>
  )
}

export default Dashboard
