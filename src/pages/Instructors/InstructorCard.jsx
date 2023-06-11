
const InstructorCard = ({ instructor }) => {
   return (
      <>
         <div className="lg:flex m-5 shadow-xl overflow-hidden">
            <div className="lg:avatar xl:avatar m-4">
               <div className="lg:w-52">
                  <img className="w-full object-cover" src={instructor?.instructorImage} alt="Album" />
               </div>
            </div>
            <div className="p-3 mt-10">
               <h2 className="font-bold">Name: {instructor?.instructorName}</h2>
               <p className=""> <span className="font-bold">Email:</span> <span className="break-all">{instructor?.email}</span></p>
            </div>
         </div>

      </>
   );
};

export default InstructorCard;