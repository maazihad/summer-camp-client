import { useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../../components/Shared/Wrapper/Wrapper";
import useAuth from "../../hooks/useAuth";
import useClasses from "../../hooks/useClasses";
import Swal from "sweetalert2";

const ClassDetails = () => {
   const navigate = useNavigate();
   const classInfo = useLoaderData();

   const { _id, activityName, picture, campCost } = classInfo;
   // console.log(classInfo);
   const [, refetch] = useClasses();

   const { user } = useAuth();

   const handleAddClass = classCartItem => {
      console.log(classCartItem);

      if (user && user.email) {

         const classItem = {
            classId: _id,
            activityName,
            picture,
            price: campCost,
            email: user.email
         };
         fetch(`${import.meta.env.VITE_API_URL}/classes`, {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(classItem)
         })
            .then(res => res.json())
            .then(data => {
               if (data.insertedId) {
                  refetch();
                  Swal.fire({
                     position: 'center',
                     icon: 'success',
                     title: 'Add Class successfully',
                     showConfirmButton: false,
                     timer: 1500
                  });
                  navigate("/dashboard/my-class");
               }
            });
      }

   };

   return (
      <Wrapper>
         <div className="card relative text-gray-700 lg:card-side bg-red-200 shadow-xl rounded-none mt-10 mb-10 pb-10">
            <figure className="rounded-none p-5 m-5 shadow-lg  shadow-gray-600">
               <img className="rounded-none shadow-lg w-full h-full object-cover" src={classInfo.picture} alt="Album" />
            </figure>
            <div className="lg:pt-5 lg:pb-3 p-5 mt-10">
               <h2 className="text-lg font-bold m-0 pb-2">Programme Name : {classInfo.activityName}</h2>
               <p className="pb-2"><b>What will be taught :</b> <br />{classInfo.courseDetails}</p>
               <p className="mb-[4px] text-lg font-semibold">Slogan : {classInfo.activitySlogan}</p>
               <p className="mb-[3px]">Programme Cost : ${classInfo.campCost}</p>

               <p className="mb-[3px] text-red-700 text-lg font-bold animate-pulse">Available Seats : {classInfo.availableSeats}</p>

               <p className="mb-[3px]">Duration : {classInfo.duration}</p>


               <div className='flex flex-col gap leading-3'>
                  <div className="avatar items-center ">
                     <span className="mr-3">
                        <p className="text-lg font-bold mr-4 text-start">Instructor : {classInfo.instructorName}</p>
                        <p>email : {classInfo.email}</p>
                     </span>
                     <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={classInfo.instructorImage} />
                     </div>
                  </div>
               </div>

               <div className="card-actions justify-end mt-7">
                  <button
                     onClick={() => handleAddClass(classInfo)}

                     // disabled={user.email === classItem.email || roomData.booked}
                     className="btn lg:btn-wide btn-block bg-red-500 text-white hover:bg-red-700 font-bold capitalize border-0 lg:mr-10">Book This Class</button>
               </div>


               {/* ===============>>>>>>animation<<<<<<<<============ */}
               <div className="absolute top-5 w-12 h-12 right-5 animate-spin">
                  <span className="w-12 h-12 rounded-full p-2 ring ring-warning ring-offset-base-100 ring-offset-2 text-yellow-800 font-bold">${classInfo.campCost}</span>
               </div>
            </div>
         </div>
      </Wrapper>
   );
};

export default ClassDetails;