import { useState } from 'react';
import UpdateModal from './UpdateModal';

const ManageRow = ({ handleDelete, classItem, refetch }) => {

   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

   return (
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
         <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <div className="btn-group">
               <button className="btn btn-xs capitalize">pending</button>
               <button className="btn btn-xs capitalize">approved</button>
               <button className="btn btn-xs capitalize">denied</button>
            </div>
         </td>
      </tr>
   );
};

export default ManageRow;