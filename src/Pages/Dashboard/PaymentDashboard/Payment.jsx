import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const [cart] = useCart();

    const total = cart.reduce((sum, course) => parseFloat(course.price) + sum, 0);
    const price = total.toFixed(2);

    return (
        <div>
            <h1 className="text-4xl uppercase text-center font-extrabold mb-20">Please Make Sure Your Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;