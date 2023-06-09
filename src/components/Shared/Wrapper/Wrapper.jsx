const Wrapper = ({ children }) => {
   return (
      <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 bg-red-100 sm:px-2 px-4'>
         {children}
      </div>
   );
};

export default Wrapper;