import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useClasses = () => {
   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();
   const { refetch, data: cart = [] } = useQuery({
      queryKey: ['classes', user?.email],
      enabled: !loading,
      queryFn: async () => {
         const res = await axiosSecure(`/classes?email=${user?.email}`);
         // console.log("response from axios", res);
         return res.data;
      },
   });
   return [cart, refetch];
};
export default useClasses;