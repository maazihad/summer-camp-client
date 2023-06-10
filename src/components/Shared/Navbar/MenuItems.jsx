import useAuth from '../../../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';

const MenuItems = ({ handleLogOut }) => {

   const { user } = useAuth();
   return (
      <>
         <li className="font-bold text-red-900">
            <NavLink to="/" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
               Home
            </NavLink>
         </li>
         <li className="font-bold text-red-900">
            <NavLink to="/instructors" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
               Instructors
            </NavLink>
         </li>
         <li className="font-bold text-red-900">
            <NavLink to="/classes" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
               Classes
            </NavLink>
         </li>
         {/* {
            user?.email &&
            <li className="font-bold text-red-900">
               <NavLink to="/addAToy" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
                  Dashboard
               </NavLink>
            </li>
         } */}
         {/* {
            user &&
            <li className="font-bold text-red-900">
               <NavLink to="/myToys" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
                  My Toys
               </NavLink>
            </li>
         } */}
         {/* <li title="cart" className="bg-indigo-500 p-2 rounded-full">
         <Link to="/my-cart">
            <div className="flex relative">
               <BsFillCartFill className="text-white " />
               <span className="absolute bottom-3 left-4 bg-blue-100 text-blue-800 text-xs font-medium mr-2 p-0.5  rounded dark:bg-blue-900 dark:text-blue-300">
                  {buyClasses || 0}
               </span>
            </div>
         </Link>
      </li> */}

         <li className="font-bold text-red-900" >
            {
               user?.email
                  ? <button onClick={handleLogOut}>Logout</button>
                  : <Link to="/authentication">Login</Link>
            }
         </li>

      </>
   );
};

export default MenuItems;