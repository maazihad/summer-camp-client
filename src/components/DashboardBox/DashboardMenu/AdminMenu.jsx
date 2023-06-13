import { AiFillHome, } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaUtensils, FaWallet } from "react-icons/fa";

const AdminMenu = () => {
   return (
      <>
         <li>
            <NavLink
               to="/dashboard/admin-home"
               className={({ isActive, isPending }) =>
                  isPending
                     ? "pending" : isActive
                        ? "active" : ""
               }
            > <AiFillHome /> Admin Home</NavLink>
         </li>

         <li>
            <NavLink
               to="/dashboard/add-class"
               className={({ isActive, isPending }) =>
                  isPending
                     ? "pending" : isActive
                        ? "active" : ""
               }
            > <FaUtensils /> Add Class</NavLink>
         </li>

         <li>
            <NavLink
               to="/dashboard/manage-classes"
               className={({ isActive, isPending }) =>
                  isPending
                     ? "pending" : isActive
                        ? "active" : ""
               }
            > <FaWallet /> Manage Classes</NavLink>
         </li>

         <li>
            <NavLink
               to="/dashboard/users"
               className={({ isActive, isPending }) =>
                  isPending
                     ? "pending" : isActive
                        ? "active" : ""
               }
            > <FaUsers />All Users</NavLink>
         </li>
      </>
   );
};

export default AdminMenu;