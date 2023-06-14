import { NavLink } from "react-router-dom";
import { FaUtensils, FaWallet } from "react-icons/fa";

const InstructorMenu = () => {
   return (
      <>

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