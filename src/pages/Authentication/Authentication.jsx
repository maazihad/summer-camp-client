import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SocialLogin from "./SocialLogin";
import Wrapper from "../../components/Shared/Wrapper/Wrapper";

const Authentication = () => {
   const [newUser, setNewUser] = useState(false);

   return (
      <Wrapper>
         <Helmet>
            <title>{newUser ? "Sign Up" : "Login"} || RAOSU Summer Camp Photography School</title>
         </Helmet>
         <section className=" text-gray-900 pb-10">
            <div className="grid lg:grid-cols-2">

               <div className="lg:w-full text-center flex justify-center items-center">
                  <img className="m-12 xl:m-16  lg:w-96  bg-contain bg-center bg-no-repeat" src="https://app.manypixels.co/static/media/login.d447a73e.svg" alt="" />
               </div>


               <div className="mt-5 flex flex-col items-start">
                  <h1 className="text-2xl gamjaFlower font mt-5 xl:text-3xl text-red-900 font-extrabold">
                     Welcome, <br /> <span className="text-purple-700 text-4xl">Rausu Photography</span> <br /> <span className="text-4xl">Summer Camp School</span>
                  </h1>

                  <h4 className="mt-5 text-xl mb-3 gamjaFlower text-purple-400 font-extrabold">{newUser ? "Sign Up" : "Login"}</h4>
                  <div className="w-full flex-1">
                     <div className="mt-1 mb-5">
                        {newUser ? <SignUp /> : <SignIn />}
                        <div
                           onClick={() => setNewUser(!newUser)}
                           className="cursor-pointer schoolbell px-2 lg:w-2/3  text-center lg:inline-block text-sm text-gray-600 tracking-wide font-medium"
                        >
                           {
                              newUser ?
                                 <div className="hover:text-red-900 border-red-400">
                                    <span className="font-bold">
                                       Have an account?{" "}
                                    </span>Please Sign in.
                                 </div> :
                                 <div className="hover:text-red-900 border-red-400">
                                    <span className="font-bold">New Student? </span> please register.
                                 </div>
                           }
                        </div>
                     </div>
                     <SocialLogin newUser={newUser} />
                  </div>
               </div>

            </div>
         </section >
      </Wrapper>
   );
};

export default Authentication;