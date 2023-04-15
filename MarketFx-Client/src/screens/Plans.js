import React, { useState } from "react";
import PlanCard from "../components/PlanCard";
import { Navigate } from "react-router-dom";
import "./plans.css"

const PlanPurchase = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [redirectToCheckout, setRedirectToCheckout] = useState(false);

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
    setRedirectToCheckout(true);
  };

  if (redirectToCheckout && selectedPlan) {
    const checkoutUrl = `/checkout/${selectedPlan.name}`;
    return <Navigate to={checkoutUrl} />;
  }

  return (
    <div className="plan-purchase-container">
      <h1>Choose a plan</h1>
      <div className="plan-card-container">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            onClick={() => handlePlanSelect(plan)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanPurchase;
