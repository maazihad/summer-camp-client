import { Link } from "react-router-dom";
// import { useState } from "react";
import { toast } from "react-hot-toast";
// import { BsFillCartFill } from "react-icons/bs";
import logo from "../../../assets/logo/logo.png";
import DropDown from "./DropDown";
import Wrapper from "../Wrapper/Wrapper";
import { AiFillCamera } from 'react-icons/ai';
import MenuItems from "./MenuItems";
import useAuth from "../../../hooks/useAuth";
const Navbar = () => {

   const { logOut } = useAuth();

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

   return (
      <div className='fixed w-full bg-red-100 z-10 shadow-sm shadow-black'>
         <Wrapper>
            <div className="navbar  max-w-7xl mx-auto">
               <div className="navbar-start">
                  <div className="dropdown">

                     <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box w-36">
                        <MenuItems handleLogOut={handleLogOut} />
                     </ul>
                  </div>
                  <Link to="/">
                     <div className="flex justify-center items-center ">
                        <img className="w-16 " src={logo} alt="" />
                        <div className=" items-center">
                           <h2 className="lg:text-3xl md:text-2xl font-bold relative ml-2 text-red-900 "> Raosu <span className="lg:hidden">Summer camp </span> School  <sup className="text-xs absolute top-1 -right-1"><AiFillCamera className="hidden lg:block" /></sup> </h2>
                           <p className="ml-2 hidden lg:block text-red-900">Summer Photography camp</p>
                        </div>
                     </div>
                  </Link>
               </div>
               <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 mx-2">
                     <MenuItems handleLogOut={handleLogOut} />
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