import { FaUserCheck } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import greetings from "../../../api/greetings";


const Login = () => {
   const { signIn } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const greeting = greetings();

   const onSubmit = data => {
      console.log(data);
      signIn(email, password)
         .then(result => {
            const loggedUser = result?.user;
            console.log(loggedUser);
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: `${greeting}! ${result?.user?.email}! Welcome Back!`,
               showConfirmButton: false,
               timer: 1500
            });
            navigate(from, { replace: true });
         })
         .catch(error => {
            toast(error.message);
         });
   };


   // const handleLogin = (event) => {
   //    event.preventDefault();

   //    const handleLogin = event => {
   //       event.preventDefault();
   //       const form = event.target;
   //       const email = form.email.value;
   //       const password = form.password.value;
   //       console.log(email, password);
   //       signIn(email, password)
   //          .then(result => {
   //             const loggedUser = result?.user;
   //             console.log(loggedUser);
   //             Swal.fire({
   //                position: 'center',
   //                icon: 'success',
   //                title: `Hello! ${result?.user?.email}! Welcome Back!`,
   //                showConfirmButton: false,
   //                timer: 1500
   //             });
   //             navigate(from, { replace: true });
   //          })
   //          .catch(error => {
   //             toast(error.message);
   //          });
   //    };

   // };


   return (
      <>
         <Helmet>
            {/* TODO :  login page registration page conditional */}
            <title>RAOSU Summer Photography || {Login}</title>
         </Helmet>

         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Sign up now!</h1>
                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">


                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" name="name" placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-700 text-md">Name field is required!</span>}
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo URL</span>
                        </label>
                        <input {...register("photoUrl", { required: true })} type="url" name="photoUrl" placeholder="Photo URL" className="input input-bordered" />
                        {errors.photoUrl && <span className="text-red-700 text-md">Photo url is required!</span>}
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-700 text-md">Email field is required!</span>}
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                           required: true,
                           minLength: 6,
                           maxLength: 20,
                           pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                        })} type="password" name="password" placeholder="password" className="input input-bordered" />

                        {errors.password?.type === 'required' && <span className="text-red-700 text-md">Password is required!</span>}

                        {errors.password?.type === 'minLength' && <p role="alert">Password must be 6 characters long.</p>}

                        {errors.password?.type === 'maxLength' && <p role="alert">Password must less than 20 characters long.</p>}

                        {errors.password?.type === 'pattern' && <p role="alert">Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character.</p>}

                     </div>

                     <div className="form-control mt-6">
                        <input className="btn btn-primary btn-outline" type="submit" value="Sign Up" />
                     </div>
                  </form>
                  <div className='mb-5 text-center'>
                     <p>Already have an account ? <Link to="/login" className='text-green-600'>Please Login.</Link></p>
                  </div>
                  <SocialLogin />
               </div>
            </div>
         </div>
      </>
   );

};

export default Login;