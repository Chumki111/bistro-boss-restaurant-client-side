import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";



const CheckOutForm = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
    }
  }, [axiosSecure, totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      console.log('payment error', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`

      });

    } else {
      console.log('payment method', paymentMethod);

    }

    // confirm card
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName,
          email: user?.email
        }
      }
    })

    if (confirmError) {
      console.log('confirm error', confirmError);
    } else {
      console.log('payment intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transactionId', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user?.email,
          price: totalPrice,
          date: new Date(),
          cartIds: cart?.map(item => item._id),
          menuItemIds: cart?.map(item => item.menuId),
          status: 'pending'
        }

        const res = await axiosSecure.post('payments', payment);
        console.log('payment saved', res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>

        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        {transactionId && <p className="text-green-500">Your Transaction Id : {transactionId}</p>}

      </form>

    </>
  );
};

export default CheckOutForm;