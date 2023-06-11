import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { getAllInstructors } from "../../api/get";
import Spinner from "../../components/Shared/Spinner/Spinner";
import Wrapper from "../../components/Shared/Wrapper/Wrapper";
import { Helmet } from "react-helmet-async";
import InstructorCard from "./InstructorCard";

const Instructors = () => {

   const [instructor, setInstructor] = useState([]);
   const { loading, setLoading } = useAuth();

   useEffect(() => {
      setLoading(true);
      getAllInstructors()
         .then(data => {
            setInstructor(data);
            setLoading(false);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [setLoading]);
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
                  instructor.map((inst) => <InstructorCard
                     key={inst._id}
                     instructor={inst}
                  ></InstructorCard>)
               }
            </div>
         </Wrapper>
      </>

   );
};

export default Instructors;