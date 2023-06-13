import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { toast } from 'react-hot-toast';
import { updateClasses } from '../../../api/classes';
import UpdateClassForm from './UpdateClassForm';

const UpdateModal = ({ setIsEditModalOpen, isOpen, refetch, classItem, id }) => {
   const [loading, setLoading] = useState(false);
   const [classesData, setClassesData] = useState(classItem);

   const handleSubmit = event => {
      event.preventDefault();
      console.log(classesData);
      const updatedData = Object.assign({}, { ...classesData });
      delete updatedData._id;
      setLoading(true);
      updateClasses(updatedData, id)
         .then(data => {
            console.log(data);
            toast.success('Class information updated');
            setLoading(false);
            refetch();
            setIsEditModalOpen(false);
         })
         .catch(err => {
            console.log(err);
            setLoading(false);
         });
   };

   console.log(classesData);
   return (
      <Transition appear show={isOpen} as={Fragment}>
         <Dialog
            as='div'
            className='relative z-10'
            onClose={() => setIsEditModalOpen(false)}
         >
            <Transition.Child
               as={Fragment}
               enter='ease-out duration-300'
               enterFrom='opacity-0'
               enterTo='opacity-100'
               leave='ease-in duration-200'
               leaveFrom='opacity-100'
               leaveTo='opacity-0'
            >
               <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto'>
               <div className='flex min-h-full items-center justify-center p-4 text-center'>
                  <Transition.Child
                     as={Fragment}
                     enter='ease-out duration-300'
                     enterFrom='opacity-0 scale-95'
                     enterTo='opacity-100 scale-100'
                     leave='ease-in duration-200'
                     leaveFrom='opacity-100 scale-100'
                     leaveTo='opacity-0 scale-95'
                  >
                     <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                        <Dialog.Title
                           as='h3'
                           className='text-lg font-medium text-center leading-6 text-gray-900'
                        >
                           Update Class Information
                        </Dialog.Title>
                        <div className='mt-2 w-full'>
                           <UpdateClassForm
                              handleSubmit={handleSubmit}
                              classesData={classesData}
                              setClassesData={setClassesData}
                              loading={loading}
                           />
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition>
   );
};

export default UpdateModal;