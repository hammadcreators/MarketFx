import React from "react";
import "./Plancard.css";

const PlanCard = ({ name, price, description, onClick }) => {
    return (
        <div className="plan-card" >
            <div className="card">
                <div className="items-container text-black">
                    <h3 className={'text-black'}>{name}</h3>
                </div>
                <div className="text-black">
                    <div className="item">
                        <p className='text-black item-header'>Description</p>
                        <p className='text-black'>{description}</p>
                    </div>
                    <div className="item text-black ">
                        <p className={'item-header'}>Price</p>
                        <p>${price} / month</p>
                    </div>
                </div>
                <div>
                    <div onClick={onClick} className="purchase-card">Purchase Package</div>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;
