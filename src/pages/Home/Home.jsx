
import { useState } from "react";
import Switch from "react-switch";
import Banner from "./Banner";
import Popular from "./Popular";
import Instructors from "./Instructors";
import Album from "./Album";


const Home = () => {

   const [checked, setChecked] = useState(false);
   const handleChange = () => {
      setChecked(!checked);
   };

   return (
      <div className="bg-red-300">
         <label className="absolute top-7 hidden lg:block right-0 z-20">
            <Switch
               onChange={handleChange}
               checked={checked}
               className="react-switch"
               onColor="#000000"
               onHandleColor="#ffffff"
               handleDiameter={30}
               uncheckedIcon={false}
               checkedIcon={false}
               boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
               activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
               height={20}
               width={48}
            />
         </label>
         <div className={checked ? "bg-neutral-900 text-white" : "bg-red-100 text-black"}>
            <Banner />
            <Popular />
            <Instructors />
            <h2 className="text-5xl mb-6  mt-12 text-red-900 font-bold text-center abril">Students best Clicking Shot</h2>
            <p className="text-center gamjaFlower text-red-800 font-bold mb-5 text-2xl">Explore the World Through Your Lens</p>
            <Album />
         </div>
      </div>
   );
};

export default Home;