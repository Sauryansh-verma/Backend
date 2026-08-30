const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String,
        minLength: 3
    },
    email:{
        required: true,
        minLength: 10,
        type: String
    },
    image:{
        required: true,
        type: String
    }
})

const CardsModel = mongoose.model('cards', cardsSchema);
module.exports = CardsModel;