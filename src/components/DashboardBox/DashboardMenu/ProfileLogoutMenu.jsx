import { FcSettings } from 'react-icons/fc';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { GrLogout } from 'react-icons/gr';

const ProfileLogoutMenu = () => {
   const navigate = useNavigate();
   const { logOut } = useAuth();
   const handleLogOut = () => {
      logOut();
      navigate('/');
   };
   return (
      <>
         <div>
            <NavLink
               to='/dashboard/user-profile'
               className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-red-100  text-red-700' : 'text-gray-600'
                  }`
               }
            >
               <FcSettings className='w-5 h-5' />
               <span className='mx-4 font-medium'>Profile</span>
            </NavLink>
            <button
               onClick={handleLogOut}
               className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
            >
               <GrLogout className='w-5 h-5' />
               <span className='mx-4 font-medium'>Logout</span>
            </button>
         </div>
      </>
   );
};

export default ProfileLogoutMenu;