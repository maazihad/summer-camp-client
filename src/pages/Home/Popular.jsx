import { useEffect, useState } from "react";
import { information } from "../../api/get";
import Spinner from "../../components/Shared/Spinner/Spinner";
import useAuth from "../../hooks/useAuth";
import Wrapper from "../../components/Shared/Wrapper/Wrapper";

const Popular = () => {

   const [populars, setPopulars] = useState([]);
   const { loading, setLoading } = useAuth();

   useEffect(() => {
      setLoading(true);
      information()
         .then(data => {
            setPopulars(data);
            setLoading(false);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [setLoading]);
   if (loading) {
      return <Spinner />;
   }

   const popular = populars.filter(popular => popular.category === 'popular');

   return (
      <>
         <Wrapper>
            <h2 className="text-5xl mt-10 text-red-900 font-bold text-center abril">Popular Classes</h2>
            <p className="text-center gamjaFlower text-red-800 font-bold mb-5 text-2xl">Discover the Art of Visual Storytelling</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gamjaFlower">
               {
                  popular.map((pop, i) => <div
                     key={i}
                  >
                     <div className="card w-full bg-red-100  rounded-none">
                        <figure><img className="h-80 w-full object-cover" src={pop.picture} alt="Toy Image here" /></figure>
                        <div>
                           <h2 className=" text-center text-2xl text-red-800 font-semibold">{pop.activityName}</h2>
                        </div>
                        <div className="absolute right-5 top-5 animate-bounce p-2 px-4 rounded-md  bg-neutral-800 opacity-75">
                           <h2 className="text-white text-center text-lg font-semibold">Seats <br />{pop.availableSeats}</h2>
                        </div>

                     </div>
                  </div>)
               }
            </div >
         </Wrapper>
      </>
   );
};

export default Popular;