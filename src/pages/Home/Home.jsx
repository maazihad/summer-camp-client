
import { useState } from "react";
import Switch from "react-switch";


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
         <div className={checked ? "bg-black text-white" : "bg-white text-black"}>
            <h2>Hello</h2>
         </div>
      </div>
   );
};

export default Home;