import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useClasses from "../../../hooks/useClasses";


const Payment = () => {

   const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
   const [cart] = useClasses();
   const total = cart.reduce((sum, current) => sum + current.price, 0);
   const price = parseFloat(total.toFixed(2));
   return (
      <div>

         <h2 className="text-3xl my-5 text-center text-red-800 font-semibold">Teka dao noile mor!!!</h2>
         <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={price} />
         </Elements>
      </div>
   );
};

export default Payment;