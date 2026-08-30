const express = require('express');

const {
    notesCreateController,
    updateNotesController,
    updateNoteEntityController,
    getAllNotesController,
    getOneNoteController,
    deleteNoteController
} = require('../controller/notes.controller');

const router = express.Router();

router.post('/create', notesCreateController);

router.get('/getAll', getAllNotesController);

router.get('/get/:id', getOneNoteController);

router.put('/:id', updateNotesController);

router.patch('/:id', updateNoteEntityController);

router.delete('/delete/:id', deleteNoteController);

module.exports = router;