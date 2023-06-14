import { NavLink } from 'react-router-dom';
import { MdPayment } from 'react-icons/md';
import { BsFillCartFill } from 'react-icons/bs';
import useClasses from '../../../hooks/useClasses';

const UsersMenu = () => {

   const [classes] = useClasses();

   return (
      <>
         <li>
            <NavLink
               to="/dashboard/my-class"
               className={({ isActive, isPending }) =>
                  isPending
                     ? "pending" : isActive
                        ? "active" : ""
               }
            > <BsFillCartFill />My Class
               <span className="badge badge-secondary">+{classes?.length || 0}</span>
            </NavLink>
         </li>

         <li>
            <NavLink
               to="/dashboard/payment-history"
               className={({ isActive, isPending }) =>
                  isPending
                     ? "pending" : isActive
                        ? "active" : ""
               }
            > <MdPayment /> Payment History</NavLink>
         </li>
      </>
   );
};

export default UsersMenu;