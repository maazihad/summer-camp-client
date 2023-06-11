import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useInstructors = () => {
   const { user, loading } = useAuth();
   const [axiosSecure] = useAxiosSecure();
   const { refetch, data: cart = [] } = useQuery({
      queryKey: ['carts', user?.email],
      enabled: !loading,
      queryFn: async () => {
         const res = await axiosSecure(`/carts?email=${user?.email}`);
         // console.log("response from axios", res);
         return res.data;
      },
   });
   return [cart, refetch];
};
export default useInstructors;