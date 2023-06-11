import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../api/auth.js";
import Swal from "sweetalert2";

const SocialLogin = ({ newUser }) => {
   const { signInWithGoogle } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   const handleGoogleSignIn = () => {
      signInWithGoogle()
         .then((result) => {
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Welcome!!! to "RAOSU" Photography Summer camp school.',
               showConfirmButton: false,
               timer: 1500
            });
            saveUser(result.user);
            navigate(from, { replace: true });

         })
         .catch((error) => {
            toast.error(error.message);
         });
   };


   return (
      <div className="lg:w-2/3 schoolbell">
         <button
            onClick={handleGoogleSignIn}
            className="w-full font-semibold shadow-sm py-3 bg-red-200 hover:bg-red-300 text-amber-900 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
         >
            <div className="bg-white p-2 rounded-full">
               <FcGoogle></FcGoogle>
            </div>
            {
               newUser ? <span className="ml-4">Sign up with Google</span> : <span className="ml-4">Login with Google</span>
            }
         </button>
      </div>
   );
};

export default SocialLogin;