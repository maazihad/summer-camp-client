import { FaRegHandPointLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ClassCard = ({ allClass }) => {
   return (


      <Link to="" className="group overflow-hidden " title="Join a camp with us">
         <div className="lg:flex m-5 shadow-xl overflow-hidden object-cover h-full group-hover:scale-110 ease-in-out duration-700">
            <div className="lg:avatar xl:avatar m-4">
               <div className="lg:w-52 group overflow-hidden">
                  <img className="w-full object-cover h-full group-hover:scale-110 ease-in-out duration-300" src={allClass.picture} alt="Album" />
               </div>
            </div>
            <div className="p-3 mt-10">
               <div>
                  <h2 className="font-bold">Activity Name: {allClass.activityName}</h2>
                  <p className=""> <span className="font-bold">Instructor Name :</span> <span className="break-all">{allClass.instructorName}</span></p>
                  <p className=""> <span className="font-bold">Available Seats :</span> <span className="break-all">{allClass.availableSeats}</span></p>
                  <p className=""> <span className="font-bold">Camp Cost :</span> <span className="break-all">{allClass.campCost}</span></p>
               </div>
               <div className=" mr-3 text-end mt-5">
                  <button className="btn self-end btn-primary btn-sm capitalize bg-red-900 hover:bg-red-700 rounded-full border-0 ">Join Camp <FaRegHandPointLeft size={24} /></button>
               </div>
            </div>
         </div>

      </Link>
   );
};

export default ClassCard;