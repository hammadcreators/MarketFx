import React from "react";
import "./Plancard.css";

const PlanCard = ({ name, price, description, onClick }) => {
  return (
    <div className="plan-card" onClick={onClick}>
      <h2>{name}</h2>
      <h3>${price}/month</h3>
      <p>{description}</p>
      <button>Subscribe</button>
    </div>
  );
};

export default PlanCard;
