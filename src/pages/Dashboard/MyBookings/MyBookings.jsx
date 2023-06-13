import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import BookingRow from "./BookingRow";

const MyBookings = () => {
   const { user } = useAuth();
   const getBookings = async (email) => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings?email=${email}`);
      const bookings = await response.json();
      return bookings;
   };
   const { data: myBookings, refetch } = useQuery(["bookings", user?.email], () =>
      getBookings(user?.email)
   );

   useEffect(() => {
      refetch();
   }, [user, refetch]);

   return (
      <>
         {
            myBookings && Array.isArray(myBookings) && myBookings.length > 0 ? <>
               <div className='container mx-auto px-4 sm:px-8'>
                  <div className='py-8'>
                     <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                           <table className='min-w-full leading-normal'>
                              <thead>
                                 <tr>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                       Title
                                    </th>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                       Location
                                    </th>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                       Price
                                    </th>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                       From
                                    </th>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                       To
                                    </th>
                                    <th
                                       scope='col'
                                       className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                       Action
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {myBookings &&
                                    myBookings.map(booking => (
                                       <BookingRow
                                          key={booking._id}
                                          booking={booking}
                                          refetch={refetch}
                                       />
                                    ))}
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </>
               // : <EmptyState
               //    message={"You didn't book any room yet. please book room...."}
               //    address={"/"}
               //    label={"Browse Rooms"}
               // />
               :
               ""
         }
      </>
   );
};

export default MyBookings;