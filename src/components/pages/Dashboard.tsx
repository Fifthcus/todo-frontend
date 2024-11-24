import { useAuth } from '../../hooks/useAuth';
import { SetListProvider } from '../../contexts/SetListContext';
import Nav from '../utils/Nav';
import List from '../utils/lists/List';
import AddTask from '../utils/lists/AddTask';

const Dashboard = (): JSX.Element => {

  const { user } = useAuth();

  return (
    <SetListProvider>
      <section className='h-screen flex flex-col'>
        <Nav />
        <section className='flex flex-col flex-grow w-full md:w-11/12 lg:w-10/12 self-center p-10'>
          <section className='flex-grow'>
            <List username={user?.username}/>
          </section>
          <section className='flex'>
            <AddTask />
          </section>
        </section>
      </section>
    </SetListProvider>
  )
}

export default Dashboard