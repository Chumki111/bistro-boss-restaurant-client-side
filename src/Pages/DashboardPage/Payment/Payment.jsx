import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


// add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_GETWAY_PAYMENT_KEY)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="payment" subHeading="wanna it"/>

            <div>
                <Elements stripe={stripePromise}>

                    <CheckOutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;