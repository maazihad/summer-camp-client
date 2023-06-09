import { useState } from "react";
import SocialLogin from "../../components/Shared/Authentication/SocialLogin";
import { Helmet } from "react-helmet-async";
import SignUp from "../../components/Shared/Authentication/SignUp";
import SignIn from "../../components/Shared/Authentication/SignIn";

const Authentication = () => {
   const [newUser, setNewUser] = useState(false);

   return (
      <>
         <Helmet>
            <title>{newUser ? "Sign Up" : "Login"} || RAOSU Summer Photography School</title>
         </Helmet>
         <section className=" text-gray-900 ">
            <div className="grid lg:grid-cols-2">

               <div className="lg:w-full text-center flex justify-center items-center">
                  <img className="m-12 xl:m-16  lg:w-96  bg-contain bg-center bg-no-repeat" src="https://app.manypixels.co/static/media/login.d447a73e.svg" alt="" />
               </div>


               <div className="mt-5 flex flex-col items-start">
                  <h1 className="text-2xl Schoolbell font mt-5 xl:text-3xl text-red-900 font-extrabold">
                     Welcome, <br /> <span className="text-purple-700 text-4xl">Rausu Photography</span> <br /> <span className="text-4xl">Summer Camp School</span>
                  </h1>

                  <h4 className="mt-5 text-xl mb-3 gamjaFlower text-purple-400 font-extrabold">{newUser ? "Sign Up" : "Login"}</h4>
                  <div className="w-full flex-1">
                     <div className="mt-1 mb-5">
                        {newUser ? <SignUp /> : <SignIn />}
                        <div
                           onClick={() => setNewUser(!newUser)}
                           className="cursor-pointer lobster px-2 lg:w-2/3  text-center lg:inline-block text-sm text-gray-600 tracking-wide font-medium"
                        >
                           {
                              newUser ?
                                 <div className="hover:text-red-900 border-red-400">
                                    <span className="font-bold">
                                       Have an account?{" "}
                                    </span>Please Sign in.
                                 </div> :
                                 <div className="hover:text-red-900 border-red-400">
                                    <span className="font-bold">New Student? </span> please sign up.
                                 </div>
                           }
                        </div>
                     </div>
                     <SocialLogin />
                  </div>
               </div>

            </div>
         </section >
      </>
   );
};

export default Authentication;