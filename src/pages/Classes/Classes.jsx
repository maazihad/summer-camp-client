import Spinner from "../../components/Shared/Spinner/Spinner";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Wrapper from "../../components/Shared/Wrapper/Wrapper";
import ClassCard from "./ClassCard";

const Classes = () => {
   const { loading } = useAuth();
   const axiosSecure = useAxiosSecure();
   const getClasses = async () => {
      try {
         const res = await axiosSecure.get('/allInfo');
         // console.log(res.data);
         return res.data;
      } catch (error) {
         console.error(error);
         throw error;
      }
   };
   const { data: classes = [] } = useQuery(['classes'], getClasses, {
      enabled: !loading
   });
   if (loading) {
      return <Spinner />;
   }

   return (
      <Wrapper>
         <h2 className="text-5xl mt-10 text-red-900 font-bold text-center gamjaFlower">Our build  Classes</h2>
         <p className="text-center gamjaFlower text-red-800 font-bold mb-5 text-2xl">Discover you and join us</p>
         <div className="grid md:grid-cols-2 gap-7 pb-10">
            {
               classes.map(allClass => <ClassCard
                  key={allClass._id}
                  allClass={allClass}
               ></ClassCard>)
            }
         </div>
      </Wrapper>
   );
};

export default Classes;