import React, {useEffect, useState} from "react";
import PlanCard from "../components/PlanCard";
import { Navigate } from "react-router-dom";
import "./plans.css"
import {MarketFxApi} from "../Api/MarketFxApi";

const PlanPurchase = () => {
  const Modal = ({ isOpen, onClose, plan }) => {
    let user = JSON.parse(localStorage.getItem('user'));
    let [userCards, setUserCards] = useState([]);
    let [selectedCard, setSelectedCard] = useState(0);

    let getCards = async () => {
      if(user !== null && user !== undefined) {
        setUserCards(await MarketFxApi.get(`cards/${user._id}`));
      }
    }

    let selectCard = (index) => {
      setSelectedCard(index);
    }

    useEffect(() => {
      getCards().then(() => {});
    }, []);

    let confirmPayment = async () => {
      let result = await MarketFxApi.post(`cards/payment/${user._id}/${userCards[selectedCard]._id}`, {
        amount: (plan.price * 100).toFixed(0),
      });
      if(result){
        let confirmPayment = await MarketFxApi.post(`cards/payment/confirm/${result}`);
        if(confirmPayment){
          onClose();
        }
      }
    }

    let cancelPayment = () => {
      onClose();
    }

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <div className={'items-container align-items-center'}>
              <h5 className={'mb-0'}>Package Name: </h5>
              <p className={'mb-0'}>{plan?.name}</p>
            </div>
            <div className={'items-container align-items-center'}>
              <h5 className={'mb-0'}>Price: </h5>
              <p className={'mb-0'}>${plan?.price} / month</p>
            </div>
            <div className={''}>
              {
                userCards.map((card, index) => {
                  return (
                      <div className={`card-item ${selectedCard === index ? 'selected' : ''}`} key={index} onClick={(() => selectCard(index))}>
                        <p className={'me-3'}>{card?.cardNumber}</p>
                        <p>{card?.holderName}</p>
                      </div>
                  )
                })
              }
            </div>
            <div className={'items-container justify-content-center'}>
              <div className={'btn-primary mt-2'} onClick={confirmPayment}>
                Confirm Payment
              </div>
              <div className={'btn-danger mt-2'} onClick={onClose}>
                Cancel
              </div>
            </div>
          </div>
        </div>
    );
  };

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPurchasedPlan, setShowPurchasedPlan] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const plans = [
    {
      name: "Basic Plan",
      price: 9.99,
      description: "Distraction-free trading and investing, with more charts, intervals and indicators",
    },
    {
      name: "Premium Plan",
      price: 19.99,
      description: "Intraday technical analysis for day traders looking to take things to the next level",
    },
    {
      name: "Ultimate Plan",
      price: 29.99,
      description: "Highest precision and maximum data to capture all possible opportunities",
    },
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowPurchasedPlan(true);
  };

  return (
    <div className="plan-purchase-container">
      <h1>Choose a plan</h1>
      <div className="plan-card-container">
        {plans.map((plan, index) => {
          return (
              <PlanCard
                  key={index}
                  name={plan?.name}
                  price={plan?.price}
                  description={plan?.description}
                  onClick={() => handlePlanSelect(plan)}
              />
          )
        })}
      </div>
      <Modal isOpen={showPurchasedPlan} onClose={(() => setShowPurchasedPlan(false))} plan={selectedPlan} />
    </div>
  );
};

export default PlanPurchase;
