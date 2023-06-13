import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";


const ManageClasses = () => {

   // TODO: এখানে যেহেতু এ্যারের মধ্যে তিনটা উপাদান আছে তাই তৃতীয়টাকে এক্সেস করতে গেলে মাঝখানেরটা খালি রেখে তৃতীয়টা লিখতে হবে। 

   const [menu, , refetch] = useMenu();
   const axiosSecure = useAxiosSecure();

   const handleDelete = (item) => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {

            axiosSecure.delete(`/menu/${item._id}`)
               .then(res => {
                  if (res.data.deletedCount > 0) {
                     refetch();
                     console.log("deleted response", res.data);
                     Swal.fire(
                        'Deleted!',
                        'Item has been deleted.',
                        'success'
                     );
                  }
               });
         }
      });
   };


   // console.log(menu);
   return (
      <div>
         {/* Helmet */}
         <Helmet>
            <title>Raosu summer camp photography School || Manage Items</title>
         </Helmet>

         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Item Image</th>
                     <th>Item Category</th>
                     <th>Price</th>
                     <th>Update</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     menu.map((item, index) => <tr key={item._id}>
                        <th>
                           <label>
                              {index + 1}
                           </label>
                        </th>
                        <td>
                           <div className="flex items-center space-x-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                 </div>
                              </div>
                              <div>
                                 <div className="font-bold">{item.name}</div>
                              </div>
                           </div>
                        </td>
                        <td>
                           {item.category}
                        </td>
                        <td>${item.price}</td>
                        <td>
                           <button className="btn btn-ghost btn-xs">details</button>
                        </td>
                        <td>
                           <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-500 btn-md">
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

export default ManageClasses;