import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Instructors = () => {

   const [axiosSecure] = useAxiosSecure();
   const { data: users = [], refetch } = useQuery(['users'], async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
   });
   const handleMakeAdmin = user => {
      console.log(user);
      fetch(`/users/admin/${user._id}`, {
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





   const handleDelete = user => {
      axiosSecure.delete(`/users/admin/${user._id}`)
         .then(data => {
            if (data.data.deletedCount > 0) {
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
            <title>Instructors || RAOSU Summer Camp Photography School</title>
         </Helmet>

         <h2 className="text-2xl font-bold text-center text-red-900">Total users : {users.length}</h2>

         <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
               {/* head */}
               <thead>
                  <tr>
                     <th>#</th>

                     <th>Name</th>
                     <th>Email</th>
                     <th>Role</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     users.map((user, index) => <tr
                        key={user._id}
                     >
                        <th>{index + 1}</th>
                        <td>
                           <div className="flex items-center space-x-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img src={u} alt="Avatar Tailwind CSS Component" />
                                 </div>
                              </div>
                              <div>
                                 <div className="font-bold">Hart Hagerty</div>
                                 <div className="text-sm opacity-50">United States</div>
                              </div>
                           </div>
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                           {
                              user.role === 'admin' ? <button className="btn btn-xs">admin</button> : <button
                                 onClick={() => handleMakeAdmin(user)}
                                 className="btn btn-ghost bg-black btn-xs"><FaUsers className="text-lg text-white" /></button>
                           }
                        </td>
                        <td>
                           <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-500  btn-xs">
                              <FaTrashAlt className="text-lg text-white" />
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

export default Instructors;