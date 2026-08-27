const express = require('express');
const router = express.Router();

const {
    createNotesController,
    getAllNotesController,
    deleteNotesController,
    updateNotesEntityController,
    updateNotesController,
    getOneNoteController
} = require('../controller/notes.controller');

router.post('/create', createNotesController);

router.get('/getAll', getAllNotesController);

router.get('get/:id', getOneNoteController);

router.put('/update/:id', updateNotesController);

router.patch('/updateEntity/:id', updateNotesEntityController);

router.delete('/delete/:id', deleteNotesController);

module.exports = router;