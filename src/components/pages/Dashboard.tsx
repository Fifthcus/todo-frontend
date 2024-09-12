import { useContext } from 'react'
import { AuthContext } from '../../contexts/UserAuth';

const Dashboard = () => {

  /*


  In previous weather project, I experienced an issue I don't remember how to duplicate, where I couldn't persist userdata "set" in the AuthContext file.


  If statement needed to prevent error related to typescript now knowing if "user, login, and logout" exists in UserAuth.tsx


  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useContext must be used within an AuthProvider");
  }
  const {user} = authContext;
  console.log(user);

  
  */

  return (
    <section>
        <h2>Welcome</h2>
    </section>
  )
}

export default Dashboard
