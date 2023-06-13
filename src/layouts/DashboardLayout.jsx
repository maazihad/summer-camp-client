import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FcSettings } from 'react-icons/fc';
import { GrLogout } from 'react-icons/gr';
import { AiFillHome, } from 'react-icons/ai';
import { BsCalendarEventFill, BsFillCartFill, BsFillMenuAppFill } from 'react-icons/bs';
import { MdPayment, MdOutlineSpaceDashboard } from 'react-icons/md';
import { BiFoodMenu } from 'react-icons/bi';
import { FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import useClasses from "../hooks/useClasses";
import useAuth from "../hooks/useAuth";
import logo from "../assets/logo/logo.png";

const Dashboard = () => {
   const navigate = useNavigate();
   const { user, logOut } = useAuth();
   const [classes] = useClasses();
   const handleLogOut = () => {
      logOut();
      navigate('/');
   };

   //  TODO: Load data from the server to have dynamic isAdmin based of data 
   // const isAdmin = true;
   const [isAdmin] = useAdmin();
   return (
      <div className="drawer drawer-mobile lg:drawer-open">
         {/* Helmet */}
         <Helmet>
            <title>Dashboard || Raosu Summer Photography Camp School</title>
         </Helmet>
         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content px-5  bg-green-200">
            {/* <!-- Page content here --> */}
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            <Outlet />

         </div>
         <div className="drawer-side bg-[#D1A054]">
            <div>
               <div className='w-full hidden md:flex py-2 justify-center items-center bg-black mx-auto'>
                  <Link to="/">
                     <img className="hidden md:block" width='100' height='100' src={logo} alt="logo" />
                  </Link>
               </div>
               <div className='flex flex-col items-center mt-6 -mx-2'>
                  <Link to='/dashboard'>
                     <img
                        className='object-cover w-24 h-24 mx-2 rounded-full'
                        src={user?.photoURL}
                        alt='avatar'
                        referrerPolicy='no-referrer'
                     />
                  </Link>
                  <Link to='/dashboard'>
                     <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                        {user?.displayName}
                     </h4>
                  </Link>
                  <Link to='/dashboard'>
                     <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                        {user?.email}
                     </p>
                  </Link>
                  <span className="text-md font-bold uppercase pt-2">
                     {
                        isAdmin ?
                           <Link to="/dashboard/admin-home"> Admin Dashboard</Link> :
                           <Link to="/dashboard/user-home"> User Dashboard</Link>
                     }
                  </span>
               </div>
            </div>
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80  text-white font-bold">

               {
                  isAdmin ? <>
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
                        > <FaUtensils /> Add Classes</NavLink>
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
                  </> : <>
                     <li>
                        <NavLink
                           to="/dashboard/user-home"
                           className={({ isActive, isPending }) =>
                              isPending
                                 ? "pending" : isActive
                                    ? "active" : ""
                           }
                        > <AiFillHome /> User Home</NavLink>
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
                     <li>
                        <NavLink
                           to="/dashboard/my-class"
                           className={({ isActive, isPending }) =>
                              isPending
                                 ? "pending" : isActive
                                    ? "active" : ""
                           }
                        > <BsFillCartFill />My Cart
                           <span className="badge badge-secondary">+{classes?.length || 0}</span>
                        </NavLink>
                     </li>
                  </>
               }
               <hr />
               <li>
                  <NavLink to="/"> <AiFillHome /> Home</NavLink>
               </li>
               <li>
                  <NavLink to="/instructors"> <BsFillMenuAppFill /> Instructors</NavLink>
               </li>
               <li>
                  <NavLink to="/classes"> <BiFoodMenu /> Classes</NavLink>
               </li>

               <div>
                  <hr />
                  <NavLink
                     to='/dashboard/user-profile'
                     className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                        }`
                     }
                  >
                     <FcSettings className='w-5 h-5' />

                     <span className='mx-4 font-medium'>Profile</span>
                  </NavLink>
                  <button
                     onClick={handleLogOut}
                     className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                  >
                     <GrLogout className='w-5 h-5' />
                     <span className='mx-4 font-medium'>Logout</span>
                  </button>
               </div>


            </ul>

         </div>
      </div>
   );
};

export default Dashboard;