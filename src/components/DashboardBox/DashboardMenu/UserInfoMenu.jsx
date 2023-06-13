import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import logo from "../../../assets/logo/logo.png";

const UserInfoMenu = () => {
   const { user } = useAuth();
   const [isAdmin] = useAdmin();
   const [isInstructor] = useInstructor();
   return (
      <>
         <div className='w-full hidden md:flex py-2 justify-center items-center bg-black mx-auto'>
            <Link to="/">
               <img className="hidden md:block" width='100' height='100' src={logo} alt="logo" />
            </Link>
         </div>
         <div className='flex flex-col items-center mt-6 -mx-2'>
            <Link to='/dashboard'>
               <img
                  className='object-cover w-20 h-20 mx-2 rounded-full'
                  src={user?.photoURL}
                  alt='avatar'
                  referrerPolicy='no-referrer'
               />
            </Link>
            <Link to='/dashboard'>
               <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                  {user?.displayName}
               </h4>
            </Link>
            <Link to='/dashboard'>
               <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                  {user?.email}
               </p>
            </Link>
            <span className="text-md font-bold uppercase pt-2">
               {
                  isAdmin ? (
                     <>
                        <Link to="/dashboard/admin-home"> Admin Dashboard</Link>
                     </>
                  ) : isInstructor ? (
                     <>
                        <Link to="/dashboard/instructor-home"> Instructor Dashboard</Link>
                     </>
                  ) : (
                     <Link to="/dashboard/user-home"> User Dashboard</Link>
                  )
               }
            </span>
         </div>
      </>
   );
};

export default UserInfoMenu;