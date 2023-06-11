import { Link, useRouteError } from "react-router-dom";
import { FiArrowLeftCircle } from 'react-icons/fi';
import errorPage from "../../assets/errorPage/errorPage.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
   const { error } = useRouteError();
   return (
      <section className='bg-red-200 flex items-center h-screen'>
         <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <div className='max-w-md text-center'>
               <Lottie animationData={errorPage} />
               <p className='text-red-500 font-semibold md:text-3xl mb-8'>
                  Message : {error?.message}
               </p>
               <Link
                  to='/'
               >
                  <button className=' bg-red-500 btn capitalize  border-0 text-red-100   px-4  rounded-full  hover:bg-red-700 ease-in-out'>
                     <FiArrowLeftCircle className="h-5 w-5 text-gray-100 mr-2" />
                     Go back
                  </button>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default ErrorPage;