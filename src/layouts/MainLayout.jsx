import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {

   return (
      <div>
         <Navbar />
         <div className="min-h-[calc(100vh-68px)] pt-28">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default MainLayout;