import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ManageRow from "./ManageRow";
import EmptyState from "../../../components/Shared/EmptyState";
import Swal from "sweetalert2";

const ManageClasses = () => {

   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();
   // >>>>>react/tanStack query
   const { data: classes = [], refetch } = useQuery({
      queryKey: ['rooms', user?.email],
      enabled: !loading,
      queryFn: async () => {
         const res = await axiosSecure.get(`/classes/${user?.email}`);
         console.log(res.data);
         return res.data;
      }
   });

   const handleDelete = id => {
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
            axiosSecure.delete(`/add-classes/${id}`)
               .then(res => {
                  if (res.data.deletedCount > 0) {
                     refetch();
                     console.log("deleted response", res.data);
                     Swal.fire(
                        'Deleted!',
                        'Class has been deleted.',
                        'success'
                     );
                  }
               });
         }
      });
   };
   console.log(classes);
   return (
      <>
         {
            classes && Array.isArray(classes) && classes.length > 0 ? <>
               <div className='container mx-auto px-4 sm:px-8'>
                  <div className='py-8'>
                     <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                           <table className='min-w-full'>
                              <thead className="">
                                 <tr>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-bold'
                                    >
                                       Class Image
                                    </th>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-bold'
                                    >
                                       Class Name
                                    </th>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-bold'
                                    >
                                       Instructor Name
                                    </th>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-bold '
                                    >
                                       Instructor Email
                                    </th>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-bold'
                                    >
                                       Price
                                    </th>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-bold'
                                    >
                                       Delete
                                    </th>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm capitalize font-bold'
                                    >
                                       Update
                                    </th>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800  text-sm capitalize font-bold'
                                    >
                                       Status
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {
                                    classes.map(classItem => <ManageRow
                                       key={classItem?._id}
                                       classItem={classItem}
                                       refetch={refetch}
                                       handleDelete={handleDelete}
                                    ></ManageRow>)
                                 }
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>

            </> : <EmptyState
               message={"No Classes data available"}
               address={"/dashboard/add-class"}
               label={"Add Class"}
            />
         }
      </>
   );
};

export default ManageClasses;











// import { Helmet } from "react-helmet-async";
// import { FaTrashAlt } from "react-icons/fa";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useClasses from "../../../hooks/useClasses";


// const ManageClasses = () => {

//    // TODO: এখানে যেহেতু এ্যারের মধ্যে তিনটা উপাদান আছে তাই তৃতীয়টাকে এক্সেস করতে গেলে মাঝখানেরটা খালি রেখে তৃতীয়টা লিখতে হবে।

//    const [classes, refetch] = useClasses();
//    const axiosSecure = useAxiosSecure();

//    const handleDelete = (item) => {
//       Swal.fire({
//          title: 'Are you sure?',
//          text: "You won't be able to revert this!",
//          icon: 'warning',
//          showCancelButton: true,
//          confirmButtonColor: '#3085d6',
//          cancelButtonColor: '#d33',
//          confirmButtonText: 'Yes, delete it!'
//       }).then((result) => {
//          if (result.isConfirmed) {

//             axiosSecure.delete(`/classes/${item._id}`)
//                .then(res => {
//                   if (res.data.deletedCount > 0) {
//                      refetch();
//                      console.log("deleted response", res.data);
//                      Swal.fire(
//                         'Deleted!',
//                         'Item has been deleted.',
//                         'success'
//                      );
//                   }
//                });
//          }
//       });
//    };


//    // console.log(menu);
//    return (
//       <div>
//          {/* Helmet */}
//          <Helmet>
//             <title>Raosu summer camp photography School || Manage Items</title>
//          </Helmet>

//          <div className="overflow-x-auto">
//             <table className="table">
//                {/* head */}
//                <thead>
//                   <tr>
//                      <th>#</th>
//                      <th>Class Image</th>
//                      <th>Instructor Name</th>
//                      <th>Price</th>
//                      <th>Duration</th>
//                      <th>Update</th>
//                      <th>Delete</th>
//                   </tr>
//                </thead>
//                <tbody>
//                   {
//                      classes.map((classItem, index) => <tr key={classItem._id}>
//                         <th>
//                            <label>
//                               {index + 1}
//                            </label>
//                         </th>
//                         <td>
//                            <div className="flex items-center space-x-3">
//                               <div className="avatar">
//                                  <div className="mask mask-squircle w-12 h-12">
//                                     <img src={classItem.picture} alt="Class Image" />
//                                  </div>
//                               </div>
//                               <div>
//                                  <div className="font-bold">{classItem.activityName}</div>
//                               </div>
//                            </div>
//                         </td>
//                         <td>
//                            {classItem.InstructorName}
//                         </td>
//                         <td>${classItem.price}</td>
//                         <td>{classItem.duration}</td>
//                         <td>
//                            <button className="btn btn-ghost btn-xs">update</button>
//                         </td>
//                         <td>
//                            <button onClick={() => handleDelete(classItem)} className="btn btn-ghost bg-red-500 btn-md">
//                               <FaTrashAlt className="text-lg text-white" />
//                            </button>
//                         </td>
//                      </tr>
//                      )
//                   }


//                </tbody>

//             </table>
//          </div>
//       </div>
//    );
// };

// export default ManageClasses;