import { AiOutlineMenu } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DropDown = () => {
   const { user, logOut, setRole } = useAuth();
   const [isOpen, setIsOpen] = useState(false);

   // const navigate = useNavigate();
   // const [modal, setModal] = useState(false);
   // console.log(role);


   // const modalHandler = email => {
   //    becomeHost(email)
   //       .then(data => {
   //          console.log(data);
   //          toast.success("Your are host now, Post Rooms!!!");
   //          setRole('host');
   //          navigate('/dashboard/add-room');
   //          closeModal();
   //       });
   // };

   // const closeModal = () => {
   //    setModal(false);
   // };




   return (
      <div className='relative'>
         <div className='flex flex-row items-center gap-3'>
            {/* {
               !role && <>
                  <div
                     className='hidden md:block text-sm font-semibold py-3 px-8 rounded-full hover:bg-neutral-100 transition cursor-pointer' >
                     <button
                        onClick={() => setModal(true)}
                        disabled={!user}
                        className={user ? 'cursor-pointer' : 'cursor-not-allowed'}
                     >
                        AirCNC your home
                     </button>
                  </div>
               </>
            } */}
            <div
               onClick={() => setIsOpen(!isOpen)}
               className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
            >
               <AiOutlineMenu />
               <div className='hidden md:block'>
                  <RxAvatar size={30} />
               </div>
            </div>
         </div>
         {
            isOpen && (
               <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm '>
                  <div className='flex flex-col cursor-pointer'>
                     <Link
                        to='/'
                        className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                     >
                        Home
                     </Link>
                     {user ? (
                        <>
                           <Link
                              to='/dashboard'
                              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                           >
                              Dashboard
                           </Link>
                           <div
                              onClick={() => {
                                 setRole(null);
                                 logOut();
                              }}
                              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                           >
                              Logout
                           </div>
                        </>
                     ) : (
                        <>
                           <Link
                              to='/login'
                              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                           >
                              Login
                           </Link>
                           <Link
                              to='/signup'
                              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                           >
                              Sign Up
                           </Link>
                        </>
                     )}
                  </div>
               </div>
            )}
         {/* <HostModal
            email={user?.email}
            isOpen={modal}
            modalHandler={modalHandler}
            closeModal={closeModal}
         /> */}
      </div>
   );
};

export default DropDown;