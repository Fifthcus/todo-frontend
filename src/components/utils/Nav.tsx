import { useState } from 'react';
import AccountCircleIcon from "../../assets/icons/account_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import Modal from './modals/Modal';
import AccountMenu from './modals/AccountMenu';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className='flex w-full justify-center bg-pastel-purple py-4 xs:px-10 sm:px-14 md:px-18 lg:px-22'>
        <section className='flex justify-start w-2/4'>
            <h2 className='text-neutral-50 text-2xl cursor-pointer'>To Do</h2>
        </section>
        <section className='flex justify-end w-2/4'>
            <img src={AccountCircleIcon} onClick={() => setIsModalOpen(true)} className="cursor-pointer" alt="Account circle icon." />
            {isModalOpen ? 
              <Modal closeModalOnClick={setIsModalOpen}>
                <AccountMenu closeModalOnClick={setIsModalOpen}/>
              </Modal> : null}
        </section>
    </nav>
  )
}

export default Nav
