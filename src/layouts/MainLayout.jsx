import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import Wrapper from "../components/Shared/Wrapper/Wrapper";

const MainLayout = () => {
   return (

      <Wrapper>
         <Navbar />
         <div className="min-h-[calc(100vh-68px)] pt-28">
            <Outlet />
         </div>
         <Footer />
      </Wrapper>

   );
};

export default MainLayout;