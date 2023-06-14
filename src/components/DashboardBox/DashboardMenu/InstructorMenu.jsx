import { NavLink } from "react-router-dom";
// import { BsFillCartFill } from 'react-icons/bs';
// import { MdPayment } from 'react-icons/md';
import { AiFillHome, } from 'react-icons/ai';
import { FaUtensils, FaWallet } from "react-icons/fa";

const InstructorMenu = () => {
   return (
      <>
         <li>
            <NavLink
               to="/dashboard/user-home"
               className={({ isActive, isPending }) =>
                  isPending
                     ? "pending" : isActive
                        ? "active" : ""
               }
            > <AiFillHome /> Instructor Home</NavLink>
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
            > <FaWallet /> My Classes</NavLink>
         </li>
      </>
   );
};

export default InstructorMenu;