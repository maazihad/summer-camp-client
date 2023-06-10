
const homeCard = ({ activities }) => {
   return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lobster">
         {
            activities.map((pop, index) => <div
               key={index}
            >
               <div className="card w-full bg-base-100 shadow-xl rounded-none">
                  <figure><img className="h-80 w-full object-cover" src={pop.picture} alt="Toy Image here" /></figure>
                  <div>
                     <h2 className=" text-center text-lg text-red-800 font-semibold">{pop.activityName}</h2>
                  </div>
                  <div className="absolute right-5 top-5 animate-bounce p-2 px-4 rounded-md  bg-neutral-800 opacity-75">
                     <h2 className="text-white text-center text-lg font-semibold">Seats <br />{pop.availableSeats}</h2>
                  </div>

               </div>
            </div>)
         }
      </div >
   );
};

export default homeCard;