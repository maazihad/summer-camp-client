import { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const PaymentHistory = () => {
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();
   const [email, setEmail] = useState('');
   const [paymentHistory, setPaymentHistory] = useState([]);
   const [error, setError] = useState('');

   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   };

   const myPaymentHistory = async () => {
      try {
         const response = await axiosSecure.get('/dashboard/payment-history', {
            params: {
               email: email,
            },
         });
         setPaymentHistory(response.data);
         setError('');
      } catch (error) {
         setPaymentHistory([]);
         setError('Error retrieving payment history');
      }
   };

   useEffect(() => {
      if (user) {
         setEmail(user.email);
         myPaymentHistory();
      }
   }, [user]);

   return (
      <div className="container mx-auto">
         <h1 className="text-3xl font-bold mb-4">Payment History</h1>

         <div className="flex mb-4">
            <input
               type="text"
               className="p-2 border border-gray-400 mr-2"
               placeholder="Email"
               value={email}
               onChange={handleEmailChange}
            />
            <button
               className="px-4 py-2 bg-blue-500 text-white"
               onClick={myPaymentHistory}
            >
               Show Payment History
            </button>
         </div>

         {error && <div className="text-red-500 mb-4">{error}</div>}

         {paymentHistory.length > 0 ? (
            <table className="w-full">
               <thead className="bg-gray-100">
                  <tr>
                     <th className="px-4 py-2">Transaction ID</th>
                     <th className="px-4 py-2">Total Payment</th>
                     <th className="px-4 py-2">Payment Date</th>
                  </tr>
               </thead>
               <tbody>
                  {user && paymentHistory.map((payment) => (
                     <tr key={payment.transactionId} className="border-b">
                        <td className="px-4 py-2">{payment.transactionId}</td>
                        <td className="px-4 py-2">{payment.totalPayment}</td>
                        <td className="px-4 py-2">{payment.paymentDate}</td>
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
