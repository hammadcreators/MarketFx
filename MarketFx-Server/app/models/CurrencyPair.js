const mongoose = require('mongoose');
let {Schema} = mongoose;

let currencyPair = new Schema({
    Id: {
        type: String,
        required: [true, "Id is required for a currency pair"]
    },
    Currency1: {
        type: String,
        required: [true, "First Currency is required in the pair"]
    },
    Currency2: {
        type: String,
        required: [true, "Second Currency is required in the pair"]
    }
});

module.exports = mongoose.model("CurrencyPair", currencyPair);
