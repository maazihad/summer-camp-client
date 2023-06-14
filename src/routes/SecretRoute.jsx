import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../components/Shared/Spinner/Spinner';
import Swal from "sweetalert2";

const SecretRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      return <Spinner />;
   }

   if (!user) {
      Swal.fire({
         icon: 'warning',
         title: 'Oops...',
         text: 'You have to log in first to class details',
      });
      return <Navigate to='/authentication' state={{ from: location }} replace></Navigate>;
   }
   return children;
};

export default SecretRoute;