import { CiMenuFries } from 'react-icons/ci';
import { RxAvatar } from 'react-icons/rx';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DropDown = ({ handleLogOut }) => {
   const { user, logOut } = useAuth();
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
               className='p-1 md:py-1 md:px- border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md hover:shadow-red-900 transition'
            >
               {/* TODO: conditional */}
               {
                  <CiMenuFries size={15} />
               }
               {
                  user ? <div className=''>
                     <img width="40" height="40" className="rounded-full" referrerPolicy="no-referrer" src={user && user.photoURL ? user.photoURL : <RxAvatar size={40} />} alt="profile image" />
                  </div> : <RxAvatar size={30} />
               }
            </div>
         </div>
         {
            isOpen && (
               <div className='absolute rounded-xl w-[38vw] md:w-48 lg:w-52 bg-red-100 shadow-lg rounded-b-none overflow-hidden right-0 top-12 text-sm '>
                  <div className='flex flex-col cursor-pointer'>
                     <p className="px-4 lg:hidden md:block py-3 text-center  transition font-semibold shadow-sm bg-red-800 text-white shadow-neutral-900 hover:bg-red-900 capitalize">{user?.displayName}</p>
                     <NavLink
                        to='/'
                        // className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}
                        className={({ isActive }) => isActive ? "block lg:hidden px-4 py-3 hover:bg-neutral-300 transition font-semibold bg-red-300 text-black" : "block lg:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"}
                     >
                        Home
                     </NavLink>
                     <NavLink
                        to='/instructors'
                        className={({ isActive }) => isActive ? "block lg:hidden px-4 py-3 hover:bg-neutral-300 transition font-semibold bg-red-300 text-black" : "block lg:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"}
                     >
                        Instructors
                     </NavLink>
                     <NavLink
                        to='/classes'
                        className={({ isActive }) => isActive ? "block lg:hidden px-4 py-3 hover:bg-neutral-300 transition font-semibold bg-red-300 text-black" : "block lg:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"}
                     >
                        Classes
                     </NavLink>
                     {user ? (
                        <>
                           <p className="px-4 hidden lg:block py-3 text-center  transition font-semibold shadow-sm bg-red-800 text-white shadow-neutral-900 hover:bg-red-900 capitalize">{user?.displayName}</p>
                           <NavLink
                              to='/dashboard'
                              className={({ isActive }) => isActive ? "block  px-4 py-3 hover:bg-neutral-300 transition font-semibold bg-red-300 text-black" : "block  px-4 py-3 hover:bg-neutral-100 transition font-semibold"}
                           >
                              Dashboard
                           </NavLink>
                           <div
                              onClick={() => {
                                 // setRole(null);
                                 logOut();
                              }}
                              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                           >
                              Logout
                           </div>
                        </>
                     ) : (
                        <>


                           {
                              user ?
                                 <button onClick={handleLogOut}>Logout</button>
                                 : <Link
                                    to='/authentication'
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                 >
                                    Login
                                 </Link>
                           }


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