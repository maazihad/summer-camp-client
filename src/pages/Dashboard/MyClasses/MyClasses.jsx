import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useClasses from "../../../hooks/useClasses";
import ClassRow from "./ClassRow";

const MyClasses = () => {
   const [classes, refetch] = useClasses();
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
            <title>Raosu summer camp photography School || My Cart</title>
         </Helmet>

         <div className="overflow-x-auto w-full py-10">
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