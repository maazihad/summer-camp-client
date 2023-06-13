import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import UsersMenu from "../components/DashboardBox/DashboardMenu/UsersMenu";
import AdminMenu from "../components/DashboardBox/DashboardMenu/AdminMenu";
import HomeMenu from "../components/Shared/Navbar/HomeMenu";
import useInstructor from "../hooks/useInstructor";
import InstructorMenu from "../components/DashboardBox/DashboardMenu/InstructorMenu";
import UserInfoMenu from "../components/DashboardBox/DashboardMenu/UserInfoMenu";
import ProfileLogoutMenu from "../components/DashboardBox/DashboardMenu/ProfileLogoutMenu";

const Dashboard = () => {
   const [isAdmin] = useAdmin();
   const [isInstructor] = useInstructor();

   return (
      <>
         <Helmet>
            <title>Dashboard || Raosu Summer Photography Camp School</title>
         </Helmet>

         <div className="drawer drawer-mobile lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content px-5  bg-green-200">
               <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
               <Outlet />
            </div>
            <div className="drawer-side bg-[#D1A054]">
               <div>
                  <UserInfoMenu />
               </div>
               <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
               <ul className="menu p-4 w-80  text-white font-bold">
                  <hr />
                  {isAdmin ? <AdminMenu /> : isInstructor ? <InstructorMenu /> : <UsersMenu />}
                  <hr />
                  <HomeMenu />
                  <hr />
                  <ProfileLogoutMenu />
               </ul>
            </div>
         </div>
      </>

   );
};

export default Dashboard;