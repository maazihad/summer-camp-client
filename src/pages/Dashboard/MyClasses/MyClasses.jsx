import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useClasses from "../../../hooks/useClasses";
import ClassRow from "./ClassRow";

const MyClasses = () => {
   const [classes, refetch] = useClasses();
   const total = classes.reduce((sum, item) => item.price + sum, 0);
   const totalPrice = parseFloat(total.toFixed(2));

   const handleDeleteClass = item => {
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
            fetch(`${import.meta.env.VITE_API_URL}/classes/${item._id}`, {
               method: 'DELETE',
            })
               .then(res => res.json())
               .then(data => {
                  if (data.deletedCount > 0) {
                     refetch();
                     Swal.fire(
                        'Deleted!',
                        'Your Class has been delete permanently.',
                        'success'
                     );
                  }
               });
         }
      });
   };
   return (
      <div>
         <Helmet>
            <title>Bistro Boss Restaurant || My Cart</title>
         </Helmet>

         <div className="flex justify-between gap-5 items-center my-5">
            <h2 className="text-3xl font-bold text-red-800">Total Selected Class : {classes.length}</h2>
            <h2 className="text-3xl font-bold text-red-800">Total Price : ${totalPrice}</h2>
         </div>

         <div className="overflow-x-auto w-full">
            <table className="table w-full">
               {/* head */}
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Class Image</th>
                     <th>Class Name</th>
                     <th>Class Cost</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     classes.map((classItem, index) => <ClassRow
                        key={classItem._id}
                        classItem={classItem}
                        index={index}
                        handleDeleteClass={handleDeleteClass}
                     ></ClassRow>)
                  }
               </tbody>
            </table>
         </div>

      </div>
   );
};

export default MyClasses;