
import { useState } from "react";
import Switch from "react-switch";


const Home = () => {

   const [checked, setChecked] = useState(false);
   const handleChange = () => {
      setChecked(!checked);
   };

   return (
      <>
         <label>
            <Switch
               onChange={handleChange}
               checked={checked}
               className="react-switch"
            />
         </label>
         <div className={checked ? "bg-black text-white" : "bg-white text-black"}>
            <h2>Hello</h2>
         </div>
      </>
   );
};

export default Home;