import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../components/Shared/Spinner/Spinner';

const SecretRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      return <Spinner />;
   }

   if (user) {
      return children;
   }
   return <Navigate to='/authentication' state={{ from: location }} replace></Navigate>;
};

export default SecretRoute;