import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import "./checkout.css";
import './Plancard.css';
import {MarketFxApi} from "../Api/MarketFxApi";

const Checkout = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  let [error, setError] = useState('');
  let [cardNumber, setCardNumber] = useState('');
  let [holderName, setHolderName] = useState('');
  let [expiryDate, setExpiryDate] = useState('');
  let [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  let addCard = async () => {
    setError('');

    if(cardNumber.length !== 16)
    {
      setError('Card Number must be of 16 characters');
      return;
    }
    let dateRegex = /^[0-9]{2}[/][0-9]{2}$/
    if(!dateRegex.test(expiryDate)) {
      setError('Date must of format MM/YY');
      return;
    }
    let dateParts = expiryDate.split('/');
    let month = parseInt(dateParts[0]);
    let year = 2000 + parseInt(dateParts[1]);
    let currentDate = new Date();
    if(month < currentDate.getMonth() + 1 && year <= currentDate.getFullYear()){
      setError('Expiry date must be after the current date');
      return;
    }
    if(cvv.length !== 3){
      setError('CVV length must be of 3 characters');
      return;
    }
    let cvvRegex = /^[0-9]{3}$/;
    if(!cvvRegex.test(cvv)){
      setError('CVV must consis of only digits');
      return;
    }

    const response = await MarketFxApi.post(`cards/create/${user._id}`, {
      cardNumber: cardNumber,
      cvv: cvv,
      expiry_month: month,
      expiry_year: year,
      holderName: holderName
    });
    if(response !== undefined)
    {
      navigate('/cards');
    }
  }

  return (
    <div className="checkout-container">
      <h1>Add Card</h1>
      <form className="checkout-form">
        <label className="card-number">Card Number:</label>
        <input type="text" id="card-number" value={cardNumber}
               onChange={t => setCardNumber(t.target.value)}/>
          <label className="card-number">Holder Name:</label>
          <input type="text" id="card-number" value={holderName}
                 onChange={t => setHolderName(t.target.value)}/>
        <label className="expiry-date">Expiry Date:</label>
        <input type="text" id="expiry-date" value={expiryDate}
               onChange={t => setExpiryDate(t.target.value)}/>
        <label className="cvv">CVV:</label>
        <input type="text" id="cvv" value={cvv}
               onChange={t => setCvv(t.target.value)}/>
        {error ? <p style={{color: 'red', textAlign: 'center'}}>{error}</p>: <div/>}
        <div className={'btn-primary'} onClick={addCard}>
          Add
        </div>
      </form>
    </div>
  );
};

export default Checkout;
