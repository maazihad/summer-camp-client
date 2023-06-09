import { Link, NavLink } from "react-router-dom";
// import { BsFillCartFill } from "react-icons/bs";
// import { IoIosListBox } from "react-icons/io";
import { useState } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import { RxAvatar } from 'react-icons/rx';

const Navbar = () => {

   // const [buyClasses, setBuyClasses] = useState([]);


   // useEffect(() => {
   //    fetch(`http://localhost:5000/my-cart?email=${user?.email}`, {
   //       headers: {
   //          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
   //       },
   //    })
   //       .then((res) => res.json())
   //       .then((data) => setBuyClasses(data[0].totalCount[0].count));
   // }, [user]);




   const { user, logOut } = useAuth();
   const [isHovered, setIsHovered] = useState(false);

   const handleMouseEnter = () => {
      setIsHovered(true);
   };
   const handleMouseLeave = () => {
      setIsHovered(false);
   };
   const handleLogOut = () => {
      logOut()
         .then(() => toast.success(`Successfully logged out!`))
         .catch(() => {
            toast.error(`Failed to logout!`);
         });
   };


   const menuItems = <>
      <li className="font-bold text-red-900">
         <NavLink to="/" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
            Home
         </NavLink>
      </li>
      <li className="font-bold text-red-900">
         <NavLink to="/blog" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
            Blog
         </NavLink>
      </li>
      <li className="font-bold text-red-900">
         <NavLink to="/allToys" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
            All Toys
         </NavLink>
      </li>
      {
         user &&
         <li className="font-bold text-red-900">
            <NavLink to="/addAToy" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
               Add a Toy
            </NavLink>
         </li>
      }
      {
         user &&
         <li className="font-bold text-red-900">
            <NavLink to="/myToys" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
               My Toys
            </NavLink>
         </li>
      }
      <li className="font-bold text-red-900">
         {
            user
               ? <button onClick={handleLogOut}>Logout</button>
               : <Link to="/login">Login</Link>
         }
      </li>
   </>;



   return (

      <nav className="bg-red-200">
         <div className="navbar  max-w-7xl mx-auto">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box w-36">
                     {menuItems}
                  </ul>
               </div>
               <Link to="/">
                  <div className="flex justify-center items-center ">
                     <img className="w-24 hidden lg:block" src={logo} alt="" />
                     <h2 className="lg:text-3xl md:text-2xl font-bold relative">Toy-Racer <sup className="text-xs absolute top-1 -right-5">BD</sup> </h2>
                  </div>
               </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1 mx-2">
                  {menuItems}
               </ul>
            </div>
            <div className="navbar-end space-x-4">
               <div
                  className=""
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
               >
                  <div className="flex items-center gap-2">
                     <p className="text-red-900 font-bold">{user && user.email}</p>
                     <div>
                        {
                           user ?
                              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                 <div className="w-10 rounded-full">
                                    <img src={user && user.photoURL} />
                                 </div>
                              </label> :
                              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                 <div className="w-10 rounded-full">
                                    <RxAvatar />
                                 </div>
                              </label>
                        }
                     </div>
                  </div>
                  {
                     isHovered && (
                        <div className="absolute right-4 mt-1 py-2 w-48 bg-red-100 rounded-md shadow-xl  z-50">
                           <div className="px-4 py-3">
                              <p className="text-sm font-medium text-gray-900">
                                 {user?.displayName}
                              </p>
                           </div>
                        </div>
                     )
                  }
               </div>
            </div>
         </div>
      </nav>




   );
};

export default Navbar;