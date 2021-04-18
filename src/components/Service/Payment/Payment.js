import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51IgnP7Hp9TQmv17edGooFKSNKJP9c6za2idf82Dh1vn0zBER0D7iFTAeO8i2ntyXyyeucgXR2sy1MszQDywVNJyK00InrEG7V7');
const Payment = () => {
    return (

        
            <Elements stripe={stripePromise}>
             import {CardElement} from '@stripe/react-stripe-js';

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
            </Elements>
         
    );
};

export default Payment;