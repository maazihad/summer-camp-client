import { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';
import { deleteClasses } from '../../../api/classes';

const ManageRow = ({ classItem, refetch }) => {
   let [isOpen, setIsOpen] = useState(false);
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

   function openModal() {
      setIsOpen(true);
   }
   function closeModal() {
      setIsOpen(false);
   }
   const modalHandler = id => {
      console.log(id);
      deleteClasses(id)
         .then(data => {
            console.log(data);
            refetch();
            toast.success('Room deleted');
         })
         .catch(err => console.log(err));
      closeModal();
   };
   return (
      <tr>
         <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <div className='flex items-center'>
               <div className='flex-shrink-0'>
                  <div className='block relative'>
                     <img
                        alt='profile'
                        src={classItem?.image}
                        className='mx-auto object-cover rounded h-10 w-15 '
                     />
                  </div>
               </div>
               <div className='ml-3'>
                  <p className='text-gray-900 whitespace-no-wrap'>{classItem?.title}</p>
               </div>
            </div>
         </td>
         <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{classItem?.location}</p>
         </td>
         <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>${classItem?.price}</p>
         </td>

         <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <span
               onClick={openModal}
               className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
            >
               <span
                  aria-hidden='true'
                  className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
               ></span>
               <span className='relative'>Delete</span>
            </span>
            <DeleteModal
               isOpen={isOpen}
               closeModal={closeModal}
               modalHandler={modalHandler}
               id={classItem._id}
            />
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
      </tr>
   );
};

export default ManageRow;