import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import HomeMenu from './HomeMenu';

const MenuItems = ({ handleLogOut }) => {
   const { user } = useAuth();
   return (
      <>
         <HomeMenu />
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