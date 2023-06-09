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
            <title>Bistro Boss Restaurant || Login</title>
         </Helmet>
         <section className=" text-gray-900 ">
            <div className="grid lg:grid-cols-2">

               <div className="lg:w-full  text-center flex justify-center items-center">
                  <img className="m-12 xl:m-16 lg:w-96  bg-contain bg-center bg-no-repeat" src="https://app.manypixels.co/static/media/login.d447a73e.svg" alt="" />
               </div>


               <div className="mt-5 flex flex-col items-start">
                  <h1 className="text-2xl xl:text-3xl text-red-900 font-extrabold">
                     Welcome to <br /> Summer Camp School
                  </h1>
                  <div className="w-full flex-1">
                     <div className="my-5  text-center">
                        {newUser ? <SignUp /> : <SignIn />}
                        <div
                           onClick={() => setNewUser(!newUser)}
                           className="cursor-pointer px-2 inline-block text-sm text-gray-600 tracking-wide font-medium"
                        >
                           {
                              newUser ?
                                 <div className="hover:border-b-2  border-red-400">
                                    <span className="font-bold">
                                       Already Have an account?{" "}
                                    </span>Sign in with e-mail
                                 </div> :
                                 <div className="hover:border-b-2  border-red-400">
                                    <span className="font-bold">New Here? </span>Or sign up
                                    with e-mail
                                 </div>
                           }
                        </div>
                     </div>
                     <SocialLogin />
                  </div>
               </div>

            </div>
         </section>
      </>
   );
};

export default Authentication;