const express = require('express');

const router = express.Router();

const {
    createCardController,
    getAllCardsController,
    updateCardController,
    deleteCardController
} = require('../controllers/cards.controller');

router.post('/create', createCardController);

router.get('/getAll', getAllCardsController);

router.patch('/update/:id', updateCardController);

router.delete('/:id', deleteCardController);

module.exports = router;