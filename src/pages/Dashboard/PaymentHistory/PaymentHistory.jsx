import { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const PaymentHistory = () => {
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();
   const [paymentHistory, setPaymentHistory] = useState([]);
   const [error, setError] = useState('');
   const [sortOrder, setSortOrder] = useState('asc');
   const [showAsc, setShowAsc] = useState(false);

   const fetchPaymentHistory = async (email) => {
      try {
         const res = await axiosSecure.get(`/dashboard/payment-history/${email}`);
         setPaymentHistory(res.data);
         setError('');
      } catch (error) {
         setPaymentHistory([]);
         setError('Error retrieving payment history');
      }
   };

   useEffect(() => {
      if (user) {
         fetchPaymentHistory(user.email);
      }
   }, [user]);

   const handleSort = () => {
      const sortedPaymentHistory = [...paymentHistory].sort((a, b) => {
         if (sortOrder === 'asc') {
            return b.transactionId.localeCompare(a.transactionId);
         } else {
            return a.transactionId.localeCompare(b.transactionId);
         }
      });
      setPaymentHistory(sortedPaymentHistory);
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
   };

   return (
      <div className="container mx-auto">
         <h1 className="text-3xl font-bold mb-4">Payment History</h1>

         {error && <div className="text-red-500 mb-4">{error}</div>}

         <div className=" text-right mb-16">
            <span className='absolute right-5 top-12' onClick={() => setShowAsc(!showAsc)}>
               <small>
                  {showAsc ? (
                     <button className="btn capitalize items-end btn-sm btn-primary px-4 py-2 cursor-pointer" onClick={handleSort}>Descending</button>
                  ) : (
                     <button className="btn capitalize items-end btn-sm btn-primary px-4 py-2 cursor-pointer" onClick={handleSort}> Ascending</button>
                  )}
               </small>
            </span>

         </div>
         {paymentHistory.length > 0 ? (
            <table className="w-full table-zebra">

               <thead className="bg-gray-100">
                  <tr>
                     <th className="px-4 py-2">#</th>
                     <th className="px-4 py-2">Transaction ID</th>
                     <th className="px-4 py-2">Total Payment</th>
                     <th className="px-4 py-2">Payment Date</th>
                  </tr>
               </thead>
               <tbody>
                  {user && paymentHistory.map((payment, index) => (
                     <tr key={payment.transactionId} className="border-b">
                        <td className="px-4 text-center py-2">{index + 1}</td>
                        <td className="px-4 text-center py-2">{payment.transactionId}</td>
                        <td className="px-4 text-center py-2">{payment.totalPayment}</td>
                        <td className="px-4 text-center py-2">{payment.paymentDate}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         ) : (
            <div className="text-gray-500">No payment history found</div>
         )}
      </div>
   );
};

export default PaymentHistory;