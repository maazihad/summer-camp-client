import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/Shared/Spinner/Spinner";
import Wrapper from "../../components/Shared/Wrapper/Wrapper";
import { Helmet } from "react-helmet-async";
import InstructorCard from "./InstructorCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Instructors = () => {
   const { loading } = useAuth();
   const axiosSecure = useAxiosSecure();
   const getInstructors = async () => {
      try {
         const res = await axiosSecure.get('/instructors');
         // console.log(res.data);
         return res.data;
      } catch (error) {
         console.error(error);
         throw error;
      }
   };
   const { data: instructors = [] } = useQuery(['instructors'], getInstructors, {
      enabled: !loading
   });
   if (loading) {
      return <Spinner />;
   }
   return (
      <>
         <Helmet>
            <title>Instructors || Raosu Summer Camp Photography School</title>
         </Helmet>
         <Wrapper>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
               {
                  instructors.slice(0, 20).map((instructor) => <InstructorCard
                     key={instructor._id}
                     instructor={instructor}

                  ></InstructorCard>)
               }
            </div>
         </Wrapper>
      </>

   );
};

export default Instructors;