import { useEffect, useState } from "react";

const Instructors = () => {

   const [instructors, setInstructors] = useState([]);
   useEffect(() => {
      fetch("./data.json")
         .then((res) => res.json())
         .then((data) => {
            setInstructors(data);
         });
   }, []);

   const popularInstructors = instructors.filter(instructor => instructor.category === 'popular');

   return (
      <>
         <h2 className="text-5xl  mt-10 text-red-900 font-bold text-center abril">Popular Instructors</h2>
         <p className="text-center gamjaFlower text-red-800 font-bold mb-5 text-2xl">Capturing Moments, Guided by Masters</p>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 gamjaFlower ">
            {
               popularInstructors.map((instructor, index) => <div
                  key={index}
               >
                  <div className="card w-full  rounded-none bg-red-100">
                     <figure><img className="h-80 w-full object-cover" src={instructor.instructorImage} alt="Toy Image here" /></figure>
                     <div>
                        <h2 className=" text-center text-2xl text-red-800 font-semibold">{instructor.instructorName}</h2>
                     </div>
                     <div className="absolute right-5 top-5 p-2 px-4 rounded-md  bg-neutral-800 opacity-75">
                        <h2 className="text-white text-center text-lg font-semibold">Popularity : <br />{instructor.ratings}</h2>
                     </div>

                  </div>
               </div>)
            }
         </div >
      </>
   );
};

export default Instructors;