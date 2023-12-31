import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import greetings from "../../api/greetings";


const SignIn = () => {
   const { signIn } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const greeting = greetings();

   const { register, handleSubmit, formState: { errors } } = useForm();

   const onSubmit = data => {
      console.log(data);
      signIn(data.email, data.password)
         .then(result => {
            const loggedUser = result?.user;
            console.log(loggedUser);
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: `${greeting}! ${result?.user?.displayName}! Welcome Back!`,
               showConfirmButton: false,
               timer: 1500
            });
            navigate(from, { replace: true });
         })
         .catch(error => {
            toast.error(error.message);
         });
   };

   return (
      <div className="lg:w-2/3">
         <form onSubmit={handleSubmit(onSubmit)} className="pb-3 schoolbell">
            <div className="form-control">
               <label className="label -ml-1">
                  <span className="label-text ">Email</span>
               </label>
               <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered border-red-900 rounded-none bg-red-100" />
               {errors.email && <span className="text-red-700 text-md ">Email field is required!</span>}
            </div>
            <div className="form-control">
               <label className="label -ml-1">
                  <span className="label-text ">Password</span>
               </label>
               <input {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
               })} type="password" name="password" placeholder="password" className="input border-red-900 rounded-none bg-red-100" />

               {errors.password?.type === 'required' && <span className="text-red-700 text-md">Password is required!</span>}

               {errors.password?.type === 'minLength' && <p role="alert">Password must be 6 characters long.</p>}

               {errors.password?.type === 'maxLength' && <p role="alert">Password must less than 20 characters long.</p>}

               {errors.password?.type === 'pattern' && <p role="alert">Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character.</p>}
            </div>
            <div className="form-control mt-6">
               <input className="btn text-red-900 transition-all font-bold duration-500 btn-outline rounded-none hover:bg-red-300 hover:border-transparent hover:text-red-900 border-red-900 capitalize ease-in-out" type="submit" value="Login" />
            </div>
         </form>
      </div>
   );

};

export default SignIn;