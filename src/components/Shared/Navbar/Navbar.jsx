import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
// import { BsFillCartFill } from "react-icons/bs";
import logo from "../../../assets/logo/logo.png";
import DropDown from "./DropDown";
import Wrapper from "../Wrapper/Wrapper";
import { AiFillCamera } from 'react-icons/ai';
const Navbar = () => {

   const { user, logOut } = useAuth();

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
               : <Link to="/login">Login</Link>
         }
      </li>

   </>;



   return (
      <div className='fixed w-full bg-red-100 z-10 shadow-sm'>
         <Wrapper>
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
                     <div className="flex  justify-center items-center ">
                        <img className="w-16 hidden lg:block" src={logo} alt="" />
                        <div>
                           <h2 className="lg:text-3xl md:text-2xl font-bold relative ml-2 text-red-900"> Raosu School<sup className="text-xs absolute top-1 -right-1"><AiFillCamera /></sup> </h2>
                           <p className="ml-2 text-red-900">Summer Photography camp</p>
                        </div>
                     </div>
                  </Link>
               </div>
               <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 mx-2">
                     {menuItems}
                  </ul>
               </div>
               <div className="navbar-end space-x-4">
                  <DropDown />
               </div>
            </div>
         </Wrapper>
      </div>
   );
};

export default Navbar;