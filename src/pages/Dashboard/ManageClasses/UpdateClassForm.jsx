import { TbFidgetSpinner } from 'react-icons/tb';

const UpdateClassForm = ({
   handleSubmit,
   loading,
   classesData,
   setClassesData,
}) => {
   return (
      <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>

         <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 gap-10'>
               <div className='space-y-1 text-sm'>
                  <label htmlFor='location' className='block text-gray-600'>
                     Class Name
                  </label>
                  <input
                     className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                     name='location'
                     value={classesData?.activityName}
                     onChange={event =>
                        setClassesData({ ...classesData, activityName: event.target.value })
                     }
                     id='location'
                     type='text'
                     placeholder='Location'
                     required
                  />
               </div>

               <div className='flex justify-between gap-2'>
                  <div className='space-y-1 text-sm'>
                     <label htmlFor='price' className='block text-gray-600'>
                        Price
                     </label>
                     <input
                        value={classesData?.campCost}
                        onChange={event =>
                           setClassesData({ ...classesData, campCost: event.target.value })
                        }
                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                        name='price'
                        id='price'
                        type='number'
                        placeholder='Price'
                        required
                     />
                  </div>

                  <div className='space-y-1 text-sm'>
                     <label htmlFor='guest' className='block text-gray-600'>
                        Available Seats
                     </label>
                     <input
                        value={classesData?.availableSeats}
                        onChange={event =>
                           setClassesData({ ...classesData, availableSeats: event.target.value })
                        }
                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                        name='total_guest'
                        id='guest'
                        type='number'
                        placeholder='Total guest'
                        required
                     />
                  </div>
               </div>



               <div className='space-y-1 text-sm'>
                  <label htmlFor='description' className='block text-gray-600'>
                     Description
                  </label>

                  <textarea
                     value={classesData?.courseDetails}
                     onChange={event =>
                        setClassesData({ ...classesData, courseDetails: event.target.value })
                     }
                     id='description'
                     className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                     name='description'
                  ></textarea>
               </div>
            </div>

            <button
               type='submit'
               className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
            >
               {loading ? (
                  <TbFidgetSpinner className='m-auto animate-spin' size={24} />
               ) : (
                  'Update'
               )}
            </button>
         </form>
      </div>
   );
};

export default UpdateClassForm;