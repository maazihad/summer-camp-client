import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const SignUp = () => {
   const [axiosSecure] = useAxiosSecure();
   const { createUser, updateUserProfile } = useAuth();
   const navigate = useNavigate();
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const onSubmit = data => {
      console.log(data);
      createUser(data.email, data.password)
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
               .then(() => {
                  const saveUser = {
                     name: data.name,
                     email: data.email
                  };
                  axiosSecure.post('/users', saveUser)
                     .then(data => {
                        console.log('after posting new menu item', data.data);
                        if (data.data.insertedId) {
                           reset();
                           Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: `${saveUser.name}, successfully singing up.`,
                              showConfirmButton: false,
                              timer: 1500
                           });
                           navigate("/");
                        }
                     });

               })
               .catch((error) => {
                  toast(error.message);
               });
         })
         .catch(error => {
            console.log(error);
            toast(error.message);
         });
   };


   return (
      <div className="lg:w-2/3">
         <form onSubmit={handleSubmit(onSubmit)} className="pb-3 lobster">
            <div className="form-control">
               <label className="label">
                  <span className="label-text -ml-1">Name</span>
               </label>
               <input {...register("name", { required: true })} type="text" name="name" placeholder="Enter your Name" className="input border-red-900 rounded-none bg-red-100" />
               {errors.name && <span className="text-red-700 text-md">Name field is required!</span>}
            </div>

            <div className="form-control">
               <label className="label">
                  <span className="label-text -ml-1 ">Email</span>
               </label>
               <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered border-red-900 rounded-none bg-red-100" />
               {errors.email && <span className="text-red-700 text-md ">Email field is required!</span>}
            </div>

            <div className="form-control">
               <label className="label">
                  <span className="label-text -ml-1 ">Password</span>
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

            <div className="form-control">
               <label className="label -ml-1">
                  <span className="label-text">Photo URL</span>
               </label>
               <input {...register("photoUrl", { required: true })} type="url" name="photoUrl" placeholder="Photo URL" className="input border-red-900 rounded-none bg-red-100" />
               {errors.photoUrl && <span className="text-red-700 text-md">Photo url is required!</span>}
            </div>

            <div className="form-control mt-6">
               <input className="btn text-red-900 btn-outline transition-all font-bold duration-500 rounded-none hover:bg-red-300 hover:border-transparent hover:text-red-900 border-red-900 capitalize ease-in-out" type="submit" value="Sign Up" />
            </div>
         </form>
      </div>
   );
};

export default SignUp;