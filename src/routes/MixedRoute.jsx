import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
import { ClockLoader } from "react-spinners";

const MixedRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const [isInstructor, isInstructorLoading] = useInstructor();
   const [isAdmin, isAdminLoading] = useAdmin();

   const location = useLocation();
   if (loading || (isInstructorLoading || isAdminLoading)) {
      return <>
         <div className="h-[70vh] flex flex-col justify-center items-center">
            <ClockLoader color="#6c5ce7" />
         </div>
      </>;
   }
   if (user && (isInstructor || isAdmin)) {
      return children;
   }
   return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default MixedRoute;