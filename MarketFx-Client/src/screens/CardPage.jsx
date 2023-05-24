import React, {useState, useEffect} from "react";
import {MarketFxApi} from "../Api/MarketFxApi";
import './plans.css'
import '../components/Plancard.css'

const CardPage = () => {

    let user = JSON.parse(localStorage.getItem('user'));
    let [userCards, setUserCards] = useState([]);

    let getCards = async () => {
        if(user !== null && user !== undefined) {
            setUserCards(await MarketFxApi.get(`cards/${user._id}`));
        }
    }

    let deleteCard = async (cardId) => {
        await MarketFxApi.delete(`cards/${cardId}`);
        await getCards();
    }

    useEffect(() => {
        getCards();
    }, []);


    return (
        <div className="plan-purchase-container">
            <div className={'items-container space-between w-100'}>
                <h1>Manage Cards</h1>
                <a className={'btn-primary'} href={'/addcard'}>
                    Add Card
                </a>
            </div>
            <div className="plan-card-container">
                {userCards.map((card, index) => {
                    return (
                        <div className="plan-card hoverable" key={index}>
                            <div className="card">
                                <div className={'items-container space-between'}>
                                    <div className="item text-black">
                                        <p className={'text-black'}>Card Holder</p>
                                        <h3 className={'text-black'}>{card.holderName}</h3>
                                    </div>
                                    <div className={'justify-end btn-danger'} onClick={(() => deleteCard(card._id))}>
                                        x
                                    </div>
                                </div>
                                <div className="items-container">
                                    <div className="item">
                                        <p className='text-black item-header'>Card Number</p>
                                        <p className='text-black'>{card.cardNumber}</p>
                                    </div>
                                    <div className="item text-black ">
                                        <p className={'item-header'}>Card Expiry</p>
                                        <p>{card.expiryDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default CardPage;
