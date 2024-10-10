import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Nav from '../utils/Nav';
import List from '../utils/lists/List';
import AddTask from '../utils/lists/AddTask';
import useFetchList from '../../hooks/useFetchList';

const Dashboard = () => {

  const {user, logout} = useAuth();

  //Fetch to do list items.
  //const {list, error, loading} = useFetchList();

  //If use is not logged in, redirect them back to login.
  //Programatically navigate away to other components.
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("../");
  }

  const [list, setList] = useState([{id: 1, list_item: "test"}]);

  return (
    <section className='h-screen flex flex-col'>
      <Nav />
      <section className='flex flex-col flex-grow w-full md:w-11/12 lg:w-10/12 self-center p-10'>
        <section className='flex-grow'>
          <List list={list} user={user}/>
        </section>
        <section className='flex'>
          <AddTask list={list} setList={setList}/>
        </section>
      </section>
    </section>
  )
}

export default Dashboard
