import { TbFidgetSpinner } from 'react-icons/tb';

const UpdateClassForm = ({
   handleSubmit,
   loading,
   handleImageUpdate,
   classesData,
   setClassesData,
}) => {
   return (
      <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
         <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 gap-10'>
               <div className='space-y-1 text-sm'>
                  <label htmlFor='location' className='block text-gray-600'>
                     Location
                  </label>
                  <input
                     className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                     name='location'
                     value={classesData?.location}
                     onChange={event =>
                        setClassesData({ ...classesData, location: event.target.value })
                     }
                     id='location'
                     type='text'
                     placeholder='Location'
                     required
                  />
               </div>
               <div className='space-y-1 text-sm'>
                  <label htmlFor='title' className='block text-gray-600'>
                     Title
                  </label>
                  <input
                     value={classesData?.title}
                     onChange={event =>
                        setClassesData({ ...classesData, title: event.target.value })
                     }
                     className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                     name='title'
                     id='title'
                     type='text'
                     placeholder='Title'
                     required
                  />
               </div>


               <div className='space-y-1'>
                  <label htmlFor='location' className='block text-gray-600'>
                     Select Availability Range
                  </label>
               </div>

               <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                  <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                     <div className='flex flex-col w-max mx-auto text-center'>
                        <label>
                           <input
                              onChange={event => {
                                 handleImageUpdate(event.target.files[0]);
                              }}
                              className='text-sm cursor-pointer w-36 hidden'
                              type='file'
                              name='image'
                              id='image'
                              accept='image/*'
                              hidden
                           />
                           <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                              Upload Image
                           </div>
                        </label>
                     </div>
                  </div>
               </div>
               <div className='flex justify-between gap-2'>
                  <div className='space-y-1 text-sm'>
                     <label htmlFor='price' className='block text-gray-600'>
                        Price
                     </label>
                     <input
                        value={classesData?.price}
                        onChange={event =>
                           setClassesData({ ...classesData, price: event.target.value })
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
                        Total guest
                     </label>
                     <input
                        value={classesData?.guests}
                        onChange={event =>
                           setClassesData({ ...classesData, guests: event.target.value })
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

               <div className='flex justify-between gap-2'>
                  <div className='space-y-1 text-sm'>
                     <label htmlFor='bedrooms' className='block text-gray-600'>
                        Bedrooms
                     </label>
                     <input
                        value={classesData?.bedrooms}
                        onChange={event =>
                           setClassesData({ ...classesData, bedrooms: event.target.value })
                        }
                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                        name='bedrooms'
                        id='bedrooms'
                        type='number'
                        placeholder='Bedrooms'
                        required
                     />
                  </div>

                  <div className='space-y-1 text-sm'>
                     <label htmlFor='bathrooms' className='block text-gray-600'>
                        Bathrooms
                     </label>
                     <input
                        value={classesData?.bathrooms}
                        onChange={event =>
                           setClassesData({ ...classesData, bathrooms: event.target.value })
                        }
                        className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                        name='bathrooms'
                        id='bathrooms'
                        type='number'
                        placeholder='Bathrooms'
                        required
                     />
                  </div>
               </div>

               <div className='space-y-1 text-sm'>
                  <label htmlFor='description' className='block text-gray-600'>
                     Description
                  </label>

                  <textarea
                     value={classesData?.description}
                     onChange={event =>
                        setClassesData({ ...classesData, description: event.target.value })
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