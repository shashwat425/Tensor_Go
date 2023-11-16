import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      setError(error.message);
    } else {
      // Send the token to your backend for further processing (payment charge)
      // You can use Axios or fetch for this
      // Example:
      // const response = await fetch('/api/charge', {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify({ token: token.id }),
      // });
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Checkout;
