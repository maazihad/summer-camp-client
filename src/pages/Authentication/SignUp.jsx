import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../api/auth.js";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const imageHostingToken = import.meta.env.VITE_Image_Upload_token;

const SignUp = () => {
   const [acceptTerms, setAcceptTerms] = useState(false);
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const url = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

   const { createUser, updateUserProfile, setLoading } = useAuth();
   const axiosSecure = useAxiosSecure();

   const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors },
   } = useForm();

   const password = watch("password", "");

   const onSubmit = (data) => {
      // console.log(data);
      const formData = new FormData();
      formData.append("image", data.image[0]);

      axiosSecure
         .post(url, formData)
         .then((res) => {
            if (res.data.success) {
               // console.log(res.data.data.display_url);
               reset();
               const imgURL = res.data.data.display_url;
               createUser(data.email, data.password)
                  .then((result) => {
                     // console.log(result.user);
                     updateUserProfile(data.name, imgURL)
                        .then(() => {
                           Swal.fire({
                              position: "center",
                              icon: "success",
                              title: 'Welcome!!! to "RAOSU" Photography Summer camp school.',
                              showConfirmButton: false,
                              timer: 1500,
                           });
                           saveUser(result.user);
                           navigate(from, { replace: true });
                        })
                        .catch((error) => {
                           toast(error.message);
                           // console.log(error.message);
                           setLoading(false);
                        });
                  })
                  .catch((error) => {
                     toast(error.message);
                     // console.log(error.message);
                     setLoading(false);
                  });
            }
         })
         .catch((error) => {
            // console.log(error);
            toast(error.message);
         });
   };

   const handleTermsAndConditions = (event) => {
      setAcceptTerms(event.target.checked);
   };

   return (
      <div className="lg:w-2/3">
         <form onSubmit={handleSubmit(onSubmit)} className="pb-3 schoolbell">
            <div className="form-control">
               <label className="label">
                  <span className="label-text -ml-1">Name</span>
               </label>
               <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="input border-red-900 rounded-none bg-red-100"
               />
               {errors.name && (
                  <span className="text-red-700 text-md">Name field is required!</span>
               )}
            </div>

            <div className="form-control">
               <label className="label">
                  <span className="label-text -ml-1 ">Email</span>
               </label>
               <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered border-red-900 rounded-none bg-red-100"
               />
               {errors.email && (
                  <span className="text-red-700 text-md ">Email field is required!</span>
               )}
            </div>

            <div className="form-control relative">
               <label className="label">
                  <span className="label-text -ml-1 ">Password</span>
               </label>
               <input
                  {...register("password", {
                     required: true,
                     minLength: 6,
                     maxLength: 20,
                     pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                  })}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input border-red-900 rounded-none bg-red-100"
               />

               {errors.password?.type === 'required' && (
                  <span className="text-red-700 text-md">Password is required!</span>
               )}

               {errors.password?.type === 'minLength' && (
                  <p role="alert">Password must be 6 characters long.</p>
               )}

               {errors.password?.type === 'maxLength' && (
                  <p role="alert">Password must be less than 20 characters long.</p>
               )}

               {errors.password?.type === 'pattern' && (
                  <p role="alert">Minimum six characters, at least one uppercase letter, one lowercase letter, one number, and one special character.</p>
               )}

               <span className='absolute right-5 top-12' onClick={() => setShowPassword(!showPassword)}>
                  <small>
                     {showPassword ? (
                        <FaEye className='cursor-pointer text-2xl text-red-700' />
                     ) : (
                        <FaEyeSlash className='cursor-pointer text-2xl text-red-900 ' />
                     )}
                  </small>
               </span>
            </div>

            <div className="form-control relative">
               <label className="label">
                  <span className="label-text -ml-1 ">Confirm Password</span>
               </label>
               <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                     required: 'Confirm Password is required',
                     validate: (value) =>
                        value === password || 'Passwords do not match',
                  })}
                  className="input input-bordered border-red-900 rounded-none bg-red-100"
               />
               {errors.confirmPassword && (
                  <p className="text-red-500">{errors.confirmPassword.message}</p>
               )}
            </div>

            <div className="form-control mt-3">
               <label htmlFor="image" className="block label mb-2 text-sm">
                  <span className="label-text -ml-1 ">Upload Your Image</span>
               </label>
               <input
                  {...register("image", { required: true })}
                  type="file"
                  name="image"
                  accept="image/*"
                  className="file-input file-input-secondary border-red-900 rounded-none bg-red-100"
               />
            </div>

            <div className="form-control cursor-pointer mt-3">
               <label className="label flex items-center justify-start">
                  <input
                     type="checkbox"
                     {...register("acceptTerms", { required: true })}
                     onChange={handleTermsAndConditions}
                     className="mr-2"
                  />
                  <span className="ml-2">
                     I accept the{" "}
                     <Link to="/terms" className="text-red-800 font-bold">
                        Terms and Conditions
                     </Link>
                  </span>
               </label>
               {errors.acceptTerms && (
                  <span className="text-red-700 text-md">You must accept the Terms and Conditions!</span>
               )}
            </div>

            <button
               type="submit"
               className={`btn mt-6 w-full rounded-none ${!acceptTerms ? 'btn-disabled' : 'btn-primary'
                  }`}
               disabled={!acceptTerms}
            >
               Sign Up
            </button>
         </form>
      </div>
   );
};

export default SignUp;