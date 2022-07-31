import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51LRXLaCODFLmmIa5usY3Rdy22Z6tK8nRdXaLpPwwt25UjTPoMnF0d5iLuyQ0mvS1ZFl70ovoCX0gnGTq8FxNU3wc00mm7GtRZJ');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};
export default App;
