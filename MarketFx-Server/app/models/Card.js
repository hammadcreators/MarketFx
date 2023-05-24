let mongoose = require('mongoose');
let {Schema} = mongoose;

let Card = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User Id is required for a card"]
    },
    stripeId: {
        type: String,
    },
    cardNumber: {
        type: String,
        required: [true, "Card Number is required"],
    },
    cvv: {
        type: String,
        required: [true, "CVV is required"],
    },
    expiryDate: {
        type: String,
        required: [true, "Expiry Date is required"],
    },
    holderName: {
        type: String,
        required: [true, "Card Holder name is required"]
    }
});

module.exports = mongoose.model("Card", Card);