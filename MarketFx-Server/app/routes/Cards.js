const express = require('express');
let router = express.Router();

const stripe = require('stripe')('sk_test_51NBJAmGUKfP4upBHsn14ybvwYdw57YaXZvg5gKwg415RTE3fEMKQ5Hm2KSDWLeNiltjlD2ia5sZaiSg7r2rJTzve00yxqInR4W');

const CardModel = require('../models/Card');
const UserModel = require('../models/User');
const {Schema} = require("mongoose");

router.post('/create/:uid', async (req, res) => {

    let currentDate = new Date();

    if(req.body.expiry_month < currentDate.getMonth() + 1 && req.body.expiry_year < currentDate.getFullYear())
    {
        res.writeHead(200, 'Card Expiry date must be after the current date');
        res.end();
        return;
    }

    let user = await UserModel.findOne({_id: req.params.uid});
    if(user === null){
        res.writeHead(400, "User not found");
        res.end();
        return;
    }

    if(user.stripeId === ''){
        //Creating stripe
        const customer = await stripe.customers.create({
            email: user.email
        });
        user.stripeId = customer.id;
        user.save();
    }

    //Creating card
    let card = await stripe.paymentMethods.create({
        type: 'card',
        card: {
            number: req.body.cardNumber,
            exp_month: req.body.expiry_month,
            exp_year: req.body.expiry_year,
            cvc: req.body.cvv
        }
    });
    console.log(card);
    let cardAttachment = await stripe.paymentMethods.attach(card.id, {
        customer: user.stripeId
    });

    let cardModel = await CardModel.create({
        userId: user._id,
        stripeId: card.id,
        cardNumber: req.body.cardNumber,
        cvv: req.body.cvv,
        expiryDate: `${req.body.expiry_month}/${req.expiry_year}`,
        holderName: req.body.holderName
    });
    res.writeHead(200);
    res.write(cardModel._id.toString());
    res.end();
});

router.post('/payment/confirm/:id', async (req, res) => {
    let confirmRes = await stripe.paymentIntents.confirm(req.params.id, {payment_method: 'pm_card_visa', return_url: "http://127.0.0.1:500/payment/confirm"});
    res.writeHead(200);
    res.write(confirmRes.status);
    res.end();
});

router.post('/payment/cancel/:id', async (req, res) => {
   let cancelRes = await stripe.paymentIntents.cancel(req.params.id);
   res.writeHead(200);
   res.end();
});

router.post('/payment/:uid/:cid', async (req, res) => {
    let user = await UserModel.findOne({_id: req.params.uid});
    if(user === null) {
        res.writeHead(200, "User not found");
        res.end();
        return;
    }

    //Finding card
    let card = await CardModel.findOne({_id: req.params.cid});
    if(card === null) {
        res.writeHead(200, "Card not found");
        res.end();
        return;
    }

    //Creating a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'usd',
        automatic_payment_methods: {enabled: true},
        customer: user.stripeId,
        payment_method: card.stripeId
    })
    res.writeHead(200);
    res.write(paymentIntent.id)
    res.end();
})

module.exports = router;