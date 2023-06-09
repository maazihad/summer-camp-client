import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

   const { signInWithGoogle } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   const handleGoogleSignIn = () => {
      signInWithGoogle()
         .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);

            const currentUser = {
               name: loggedUser.displayName,
               email: loggedUser.email,
            };

            fetch("http://localhost:5000/users", {
               method: "POST",
               headers: {
                  "content-type": "application/json",
               },
               body: JSON.stringify(currentUser),
            })
               .then((res) => res.json())
               .then(() => {
                  navigate(from, { replace: true });
               })
               .catch((error) => {
                  toast.error(error.message);
               });
         })
         .catch((error) => {
            toast.error(error.message);
         });
   };


   return (
      <div className="lg:w-2/3 lobster">
         <button
            onClick={handleGoogleSignIn}
            className="w-full font-semibold shadow-sm py-3 bg-red-200 hover:bg-red-300 text-amber-900 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
         >
            <div className="bg-white p-2 rounded-full">
               <FcGoogle></FcGoogle>
            </div>
            <span className="ml-4">Register with Google</span>
         </button>
      </div>
   );
};

export default SocialLogin;