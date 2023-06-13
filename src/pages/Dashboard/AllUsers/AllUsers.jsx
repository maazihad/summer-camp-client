import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
   const axiosSecure = useAxiosSecure();
   const { data: users = [], refetch } = useQuery(['users'], async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
   });
   const handleMakeAdmin = user => {
      console.log(user);
      fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
         method: "PATCH",
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
               refetch();
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: `${user.name} is now admin`,
                  showConfirmButton: false,
                  timer: 1500
               });
            }
         });
   };
   const handleMakeInstructor = user => {
      console.log(user);
      fetch(`${import.meta.env.VITE_API_URL}/users/instructor/${user._id}`, {
         method: "PATCH",
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
               refetch();
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: `${user.name} is now Instructor`,
                  showConfirmButton: false,
                  timer: 1500
               });
            }
         });
   };

   const handleDelete = user => {
      fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
         method: "DELETE",
      })
         .then(res => res.json())
         .then(data => {
            if (data.deletedCount > 0) {
               refetch();
               Swal.fire(
                  'Deleted!',
                  `${user.name} is deleted from admin`,
                  'success'
               );
            }
         });
   };

   return (
      <div>

         {/* Helmet */}
         <Helmet>
            <title>Raosu summer camp photography School || All Users</title>
         </Helmet>

         <h2 className="text-2xl font-bold text-center text-red-900">Total users : {users.length}</h2>

         <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
               {/* head */}
               <thead >
                  <tr>
                     <th>#</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th className="text-center">Role</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     users.map((user, index) => <tr
                        key={user._id}
                     >
                        <th>{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className="text-center">

                           {
                              user.role === 'admin' ? (
                                 <button className="btn btn-xs" disabled>admin</button>
                              ) : user.role === 'instructor' ? (
                                 <button className="btn btn-xs" disabled>instructor</button>
                              ) : (
                                 <div className="btn-group">
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-primary capitalize bg-red-900 border-0 btn-xs">
                                       Make Admin
                                    </button>
                                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-primary capitalize bg-red-800 border-0 btn-xs">
                                       Make Instructor
                                    </button>
                                 </div>
                              )
                           }

                        </td>


                        {/*  */}
                        <td>
                           <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-700 btn-xs">
                              <FaTrashAlt className="text-md text-white" />
                           </button>
                        </td>

                     </tr>)
                  }


               </tbody>
            </table>
         </div>
      </div>
   );
};

export default AllUsers;