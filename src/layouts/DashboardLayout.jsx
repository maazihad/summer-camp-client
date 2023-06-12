import { Link, NavLink, Outlet } from "react-router-dom";

import { AiFillHome, } from 'react-icons/ai';
import { BsCalendarEventFill, BsFillCartFill, BsFillMenuAppFill } from 'react-icons/bs';
import { MdPayment, MdDashboard } from 'react-icons/md';
import { BiFoodMenu } from 'react-icons/bi';
import useCart from "../hooks/useCart";
import { FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
   const [cart] = useCart();

   //  TODO: Load data from the server to have dynamic isAdmin based of data 
   // const isAdmin = true;
   const [isAdmin] = useAdmin();
   return (
      <div className="drawer drawer-mobile lg:drawer-open">
         {/* Helmet */}
         <Helmet>
            <title>Bistro Boss Restaurant || Dashboard</title>
         </Helmet>
         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content px-5  bg-green-200">
            {/* <!-- Page content here --> */}
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            <Outlet />

         </div>
         <div className="drawer-side bg-[#D1A054]">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80  text-white font-bold">
               {/* <!-- Sidebar content here --> */}
               <li className="text-xl">
                  {
                     isAdmin ?
                        <Link to="/dashboard/adminhome"><MdDashboard /> Dashboard</Link> :
                        <Link to="/dashboard/userhome"><MdDashboard /> Dashboard</Link>
                  }
               </li>
               {
                  isAdmin ? <>
                     <li>
                        <NavLink
                           to="/dashboard/adminhome"
                           className={({ isActive, isPending }) =>
                              isPending
                                 ? "pending" : isActive
                                    ? "active" : ""
                           }
                        > <AiFillHome /> Admin Home</NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/dashboard/additem"
                           className={({ isActive, isPending }) =>
                              isPending
                                 ? "pending" : isActive
                                    ? "active" : ""
                           }
                        > <FaUtensils /> Add Items</NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/dashboard/manageitems"
                           className={({ isActive, isPending }) =>
                              isPending
                                 ? "pending" : isActive
                                    ? "active" : ""
                           }
                        > <FaWallet /> Manage Items</NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/dashboard/allusers"
                           className={({ isActive, isPending }) =>
                              isPending
                                 ? "pending" : isActive
                                    ? "active" : ""
                           }
                        > <FaUsers />All Users</NavLink>
                     </li>
                  </> : <>
                     <li>
                        <NavLink
                           to="/dashboard/userhome"
                           className={({ isActive, isPending }) =>
                              isPending
                                 ? "pending" : isActive
                                    ? "active" : ""
                           }
                        > <AiFillHome /> User Home</NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/dashboard/reservation"
                           className={({ isActive, isPending }) =>
                              isPending
                                 ? "pending" : isActive
                                    ? "active" : ""
                           }
                        > <BsCalendarEventFill /> Reservation</NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/dashboard/history"
                           className={({ isActive, isPending }) =>
                              isPending
                                 ? "pending" : isActive
                                    ? "active" : ""
                           }
                        > <MdPayment /> Payment History</NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/dashboard/mycart"
                           className={({ isActive, isPending }) =>
                              isPending
                                 ? "pending" : isActive
                                    ? "active" : ""
                           }
                        > <BsFillCartFill />My Cart
                           <span className="badge badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>
                     </li>
                  </>



               }

               <div className="divider "></div>

               <li>
                  <NavLink to="/"> <AiFillHome /> Home</NavLink>
               </li>
               <li>
                  <NavLink to="/menu"> <BsFillMenuAppFill /> Our Menu</NavLink>
               </li>
               <li>
                  <NavLink to="/order/salad"> <BiFoodMenu /> Order Food</NavLink>
               </li>
            </ul>

         </div>
      </div>
   );
};

export default Dashboard;