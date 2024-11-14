import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Close from '../../../assets/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';

interface AccountMenuProps {
    closeModalOnClick: (arg: boolean) => void;
}

const AccountMenu = ({ closeModalOnClick }: AccountMenuProps) => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try{
            const url = `http://localhost:3000/user/logout`;
            await fetch(url, {
                method: "POST",
                credentials: "include",
            })
            logout();
            navigate("/");
        } catch(error){
            console.error(error);
        }
    }
    return (
        <section onClick={(event) => event.stopPropagation()} className='flex flex-col px-4 py-4 bg-slate-50 rounded-lg'>
            <section className='flex justify-end'>
                <img src={Close} onClick={() => closeModalOnClick(false)} className="cursor-pointer" title="Close menu." alt="An icon to close this account menu."/>
            </section>
            <section className='px-10'>
                <h3 className='text-lg font-semibold py-4'>Manage your account.</h3>
                <ul className='text-center pb-4'>
                    <li className='cursor-pointer hover:underline'>Change Password</li>
                    <li onClick={handleLogout} className='cursor-pointer hover:underline'>Logout</li>
                </ul>
            </section>
        </section>
    )
}

export default AccountMenu
