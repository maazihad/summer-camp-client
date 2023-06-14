import { useState } from 'react';
import UpdateModal from './UpdateModal';

const ManageRow = ({ handleDelete, classItem, refetch, status,
   handleApprove,
   handleDeny,
   handleFeedback,
   handleSubmitFeedback,
   isFeedbackModalOpen,
   feedback,
   setFeedback,
   setFeedbackModalOpen,
   isDisabled }) => {

   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

   return (
      <>
         <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
               <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                     <div className='block relative'>
                        <img
                           alt='profile'
                           src={classItem?.picture}
                           className='mx-auto object-cover rounded h-10 w-15 '
                        />
                     </div>
                  </div>
               </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
               <p className='text-gray-900 capitalize whitespace-no-wrap'>{classItem?.activityName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
               <p className='text-gray-900 capitalize whitespace-no-wrap'>{classItem?.instructorName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
               <p className='text-gray-900 normal-case whitespace-no-wrap'>{classItem?.email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
               <p className='text-gray-900 capitalize whitespace-no-wrap'>${classItem?.campCost}</p>
            </td>
            <td className='px-5 text-center py-5 border-b border-gray-200 bg-white text-sm'>
               <p className='text-gray-900 capitalize whitespace-no-wrap'>{classItem?.availableSeats}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

               <button
                  onClick={() => handleDelete(classItem._id)}
                  className="btn btn-xs">delete</button>

            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
               <span
                  onClick={() => setIsEditModalOpen(true)}
                  className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
               >
                  <span
                     aria-hidden='true'
                     className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                  ></span>
                  <span className='relative'>Update</span>
               </span>
               <UpdateModal
                  isOpen={isEditModalOpen}
                  closeModal={() => setIsEditModalOpen(false)}
                  classItem={classItem}
                  id={classItem._id}
                  refetch={refetch}
                  setIsEditModalOpen={setIsEditModalOpen}
               />
            </td>
            {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <button className="btn btn-xs capitalize">pending</button>
         </td>
         <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <div className="btn-group">
               <button className="btn btn-xs capitalize">pending</button>
               <button className="btn btn-xs capitalize">approved</button>
               <button className="btn btn-xs capitalize">feedback</button>
            </div>
         </td> */}




            {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
               {status === 'pending' && (
                  <button className="btn btn-xs capitalize">pending</button>
               )}
               {status === 'approved' && (
                  <button className="btn btn-xs capitalize" disabled>
                     Approved
                  </button>
               )}
               {status === 'denied' && (
                  <button className="btn btn-xs capitalize" disabled>
                     Denied
                  </button>
               )}
               {status === 'denied' && (
                  <button className="btn btn-xs capitalize" disabled>
                     feedback
                  </button>
               )}
            </td> */}


            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
               {status === 'pending' && (
                  <button className="btn btn-xs capitalize" disabled={isDisabled}>
                     {isDisabled ? 'Approved' : 'Pending'}
                  </button>
               )}
               {status === 'denied' && (
                  <button className="btn btn-xs capitalize" disabled>
                     Denied
                  </button>
               )}
               {status === 'denied' && (
                  <button className="btn btn-xs capitalize" disabled>
                     Feedback
                  </button>
               )}
            </td>



            {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
               <div className="btn-group">
                  {status === 'pending' && (
                     <button
                        className="btn btn-xs capitalize"
                        onClick={handleApprove}
                     >
                        Approve
                     </button>
                  )}
                  {status === 'pending' && (
                     <button
                        className="btn btn-xs capitalize"
                        onClick={handleDeny}
                     >
                        Deny
                     </button>
                  )}
                  {status === 'pending' && (
                     <button
                        className="btn btn-xs capitalize"
                        onClick={handleFeedback}
                     >
                        Feedback
                     </button>
                  )}
               </div>
            </td> */}


            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
               <div className="btn-group">
                  {status === 'pending' && (
                     <button
                        className="btn btn-xs capitalize"
                        onClick={handleApprove}
                        disabled={isDisabled}
                     >
                        Approve
                     </button>
                  )}
                  {status === 'pending' && (
                     <button
                        className="btn btn-xs capitalize"
                        onClick={handleDeny}
                        disabled={isDisabled}
                     >
                        Deny
                     </button>
                  )}
                  {status === 'pending' && (
                     <button
                        className="btn btn-xs capitalize"
                        onClick={handleFeedback}
                        disabled={isDisabled}
                     >
                        Feedback
                     </button>
                  )}
               </div>
            </td>



         </tr>


         {
            isFeedbackModalOpen && (
               <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  <div className="bg-white rounded-lg p-8">
                     <h2 className="text-lg font-bold mb-4">Provide Feedback</h2>
                     <textarea
                        className="form-textarea w-full h-24"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                     ></textarea>
                     <div className="mt-4 flex justify-end">
                        <button
                           className="btn btn-primary mr-2"
                           onClick={handleSubmitFeedback}
                        >
                           Submit
                        </button>
                        <button
                           className="btn btn-secondary"
                           onClick={() => setFeedbackModalOpen(false)}
                        >
                           Cancel
                        </button>
                     </div>
                  </div>
               </div>
            )
         }
      </>

   );
};

export default ManageRow;