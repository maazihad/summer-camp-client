import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ManageRow from "./ManageRow";
import EmptyState from "../../../components/Shared/EmptyState";
import Swal from "sweetalert2";
import { useState } from "react";
import useAdmin from "../../../hooks/useAdmin";

const ManageClasses = () => {
   const [isAdmin] = useAdmin();
   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();
   const { data: classes = [], refetch } = useQuery({
      queryKey: ['classes', user?.email],
      enabled: !loading,
      queryFn: async () => {
         const res = await axiosSecure.get(`/classes/${user?.email}`);
         // console.log(res.data);
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
                     // console.log("deleted response", res.data);
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
   // console.log(classes);

   const [status, setStatus] = useState('pending');
   const [isDisabled, setIsDisabled] = useState(false);

   const handleApprove = () => {
      setStatus('approved');
      setIsDisabled(true);
   };

   const handleDeny = () => {
      setStatus('denied');
      setIsDisabled(true);
   };

   const handleFeedback = () => {
      setStatus('denied');
      setIsDisabled(true);
   };

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
                                       Available Seats
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
                                    {isAdmin && <th
                                       scope='col'
                                       className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800  text-sm capitalize font-bold'
                                    >
                                       status
                                    </th>}
                                    {isAdmin && <th
                                       scope='col'
                                       className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800  text-sm capitalize font-bold'
                                    >
                                       Action
                                    </th>}
                                 </tr>
                              </thead>
                              <tbody>
                                 {
                                    classes.map(classItem => <ManageRow
                                       key={classItem?._id}
                                       classItem={classItem}
                                       refetch={refetch}
                                       handleDelete={handleDelete}
                                       status={status}
                                       handleApprove={handleApprove}
                                       handleDeny={handleDeny}
                                       handleFeedback={handleFeedback}
                                       isDisabled={isDisabled}

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