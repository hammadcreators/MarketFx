import React from "react";
import { useParams } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
  const { planName } = useParams();

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <p>Selected Plan: {planName}</p>
      <form>
        <label htmlFor="card-number">Card Number:</label>
        <input type="text" id="card-number" />
        <label htmlFor="expiry-date">Expiry Date:</label>
        <input type="text" id="expiry-date" />
        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
