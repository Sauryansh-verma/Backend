const CardsModel = require('../models/notes.model');

const createCardController = async (req, res) => {
    try{
        let newNote = await CardsModel.create(req.body);
        res.status(201).json({
            message: 'Card created successfully',
            data: newNote
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

const getAllCardsController = async (req, res) => {
    try{
        let allCards = await CardsModel.find();
        res.status(200).json({
            message: 'All cards fetched successfully',
            data: allCards
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

const updateCardController = async (req, res) => {
    try{
        let updatedCard = await CardsModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({
            message: 'Card updated successfully',
            data: updatedCard
        })
    }catch{
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

const deleteCardController = async (req, res) => {
    try{
        await CardsModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Note deleted successfully'
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

module.exports = {
    createCardController,
    getAllCardsController,
    updateCardController,
    deleteCardController
}