import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';

const CheckoutForm = (props) => {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={props.submit}>Send</button>
      </div>
    );
}

export default injectStripe(CheckoutForm);