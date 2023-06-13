import { NavLink } from 'react-router-dom';

const HomeMenu = () => {
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
      </>
   );
};

export default HomeMenu;