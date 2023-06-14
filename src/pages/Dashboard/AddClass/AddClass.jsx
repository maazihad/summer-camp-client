import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useInstructor from "../../../hooks/useInstructor";

const AddClass = () => {
   const [isInstructor] = useInstructor();
   const { user } = useAuth();
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const axiosSecure = useAxiosSecure();
   const onSubmit = async (data) => {
      // console.log(data);
      axiosSecure.post('/add-class', data)
         .then(data => {
            // console.log('after posting new menu item', data.data);
            if (data.data.insertedId) {
               // reset();
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Class added successfully',
                  showConfirmButton: false,
                  timer: 1500
               });
            }
         });
   };

   return (
      <div className="container mx-auto my-10">
         <h1 className="text-4xl font-bold mb-4 text-center text-red-900">Add Class</h1>
         <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control">
               <label className="label ">
                  <span className="label-text">Picture URL</span>
               </label>
               <input {...register("picture")} type="text" name="picture" placeholder="Picture" className="input input-bordered" />
            </div>
            <div className="form-control hidden" >
               <label className="label ">
                  <span className="label-text">Role</span>
               </label>
               <input defaultValue={isInstructor ? "instructor" : "admin"} {...register("role")} type="text" name="role" placeholder="role" className="input input-bordered" />
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
               <div className="form-control">
                  <label className="label ">
                     <span className="label-text">Course Name</span>
                  </label>
                  <input {...register("activityName", { required: true })} type="text" name="activityName" placeholder="Activity Name" className="input input-bordered" />
                  {errors.activityName && <span className="text-red-700 text-md">Activity Name field is required!</span>}
               </div>

               <div className="form-control">
                  <label className="label ">
                     <span className="label-text">Instructor Name</span>
                  </label>
                  <input {...register("instructorName")} type="text" name="instructorName" placeholder="Instructor Name" className="input input-bordered" />
               </div>


               <div className="form-control">
                  <label className="label ">
                     <span className="label-text">Position</span>
                  </label>
                  <input {...register("position")} type="text" name="position" placeholder="Position" className="input input-bordered" />
               </div>

            </div>

            <div className="grid lg:grid-cols-3 gap-5">
               <div className="form-control">
                  <label className="label ">
                     <span className="label-text">Instructor Image</span>
                  </label>
                  <input {...register("instructorImage")} type="text" name="instructorImage" placeholder="Instructor Image" className="input input-bordered" />
               </div>

               <div className="form-control">
                  <label className="label ">
                     <span className="label-text">Email</span>
                  </label>
                  <input {...register("email", { required: true })} type="email" name="email" placeholder="Email" className="input input-bordered" defaultValue={user.email} />
                  {errors.email && <span className="text-red-700 text-md">Email field is required!</span>}
               </div>
               <div className="form-control">
                  <label className="label ">
                     <span className="label-text">Popularity</span>
                  </label>
                  <input {...register("popularity")} type="text" name="popularity" placeholder="Popularity" className="input input-bordered" />
               </div>
            </div>

            <div className="form-control">
               <label className="label ">
                  <span className="label-text">Activity Slogan</span>
               </label>
               <input {...register("activitySlogan")} type="text" name="activitySlogan" placeholder="Activity Slogan" className="input input-bordered" />
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
               <div className="form-control">
                  <label className="label ">
                     <span className="label-text">Course Fee</span>
                  </label>
                  <input {...register("campCost")} type="number" name="campCost" placeholder="Camp Cost" className="input input-bordered" />
               </div>

               <div className="form-control">
                  <label className="label ">
                     <span className="label-text">Available Seats</span>
                  </label>
                  <input {...register("availableSeats")} type="number" name="availableSeats" placeholder="Available Seats" className="input input-bordered" />
               </div>

               <div className="form-control">
                  <label className="label ">
                     <span className="label-text">Category</span>
                  </label>
                  <input {...register("category")} type="text" name="category" placeholder="Category" className="input input-bordered" />
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-5">
               <div className="form-control">
                  <label className="label ">
                     <span className="label-text">Duration</span>
                  </label>
                  <input {...register("duration")} type="text" name="duration" placeholder="Duration" className="input input-bordered" />
               </div>

               <div className="form-control">
                  <label className="label ">
                     <span className="label-text">Ratings</span>
                  </label>
                  <input {...register("ratings")} type="number" name="ratings" placeholder="Ratings" className="input input-bordered" />
               </div>
            </div>

            <div className="form-control">
               <label className="label ">
                  <span className="label-text">Course Details</span>
               </label>
               <textarea {...register("courseDetails")} name="courseDetails" placeholder="Course Details" className="textarea textarea-bordered"></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-4">Add Class</button>
         </form>
      </div>
   );
};

export default AddClass;