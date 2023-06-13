import { FaRegHandPointLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const ClassCard = ({ allClass }) => {
   const navigate = useNavigate();
   const { user } = useAuth();

   const handleClassDetails = () => {
      if (allClass.availableSeats === 0) {
         Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'This programme currently fulfills. Please try another.',
            showConfirmButton: false,
            timer: 1500,
         });
      }

      else {
         if (user.insertedId) {
            Swal.fire({
               position: 'center',
               icon: 'warning',
               title: 'You must be logged in first.',
               showConfirmButton: false,
               timer: 1500,
            }).then(() => {
               navigate('/authentication');
            });
         } else {
            navigate(`/class/${allClass._id}`);
         }
      }

   };

   return (
      <div className="group">
         <div
            className={`lg:flex m-5 shadow-xl object-cover h-full hover:shadow-lg hover:shadow-neutral-600 ${allClass.availableSeats === 0
               ? 'bg-gradient-to-r from-red-500 to-red-600 opacity-70 text-orange-200 cursor-not-allowed' : 'cursor-pointer animate-none'}`}
         >
            <div className="lg:avatar xl:avatar m-4 hover:ease-in-out hover:duration-700">
               <div className="lg:w-52 group overflow-hidden">
                  <img
                     className="w-full object-cover h-full group-hover:scale-110 ease-in-out duration-300"
                     src={allClass.picture}
                     alt="Album"
                  />
               </div>
            </div>
            <div className="p-3 mt-10">
               <div className="animate-pulse">
                  <h2 className="font-bold">Activity Name: {allClass.activityName}</h2>
                  <p className="">
                     <span className="font-bold">Instructor Name :</span>{' '}
                     <span className="break-all">{allClass.instructorName}</span>
                  </p>
                  <p className="">
                     <span className="font-bold">Available Seats :</span>{' '}
                     <span className="break-all">{allClass.availableSeats}</span>
                  </p>
                  <p className="">
                     <span className="font-bold">Camp Cost :</span>{' '}
                     <span className="break-all">{allClass.campCost}</span>
                  </p>
               </div>
               <div className="mr-3 text-end mt-5">
                  <Link to={`/class/${allClass._id}`}>
                     <button
                        className={`btn self-end btn-primary btn-sm capitalize bg-red-900 rounded-full border-0 hover:bg-red-700 cursor-pointer ${allClass.availableSeats === 0 ? 'disabled' : ''}`}
                        disabled={allClass.availableSeats === 0}
                        onClick={handleClassDetails}
                     >
                        Class Details <FaRegHandPointLeft size={24} />
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ClassCard;