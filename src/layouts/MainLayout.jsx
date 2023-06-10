import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {

   return (
      <div>
         <Navbar />
         <div className="min-h-[calc(100vh-50px)] pt-20 bg-red-100">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default MainLayout;