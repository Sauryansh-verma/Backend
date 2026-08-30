const NotesModel = require('../models/notes.model');


const notesCreateController = async (req, res) => {
    try{
        let {title, description} = req.body;
        const newNote = await NotesModel.create({title, description});
        return res.status(201).json({
            message: 'Note Created Successfully',
            data: newNote
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

const getAllNotesController = async (req, res) => {
    try{
        const allNotes = await NotesModel.find();
        return res.status(200).json({
            message: 'All Notes Fetched successfully',
            data: allNotes
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

const getOneNoteController = async (req, res) => {
    try{
        let {id} = req.params;
        const note = await NotesModel.findById(id);
        return res.status(200).json({
            message: 'Note Fetched successfully',
            data: note
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

const updateNotesController = async (req, res) => {
    try{
        let {id} = req.params;
        let {title, description} = req.body;

        const updatedNote = await NotesModel.findByIdAndUpdate(id, {title, description}, {new: true});

        return res.status(200).json({
            message: 'Note Updated Successfully',
            data: updatedNote
        })
    }catch(error){
        console.log(error);

        return res.status(500).json({
            message: 'Internal server error',
        })
    }
}

const updateNoteEntityController = async (req, res) => {
    try{
        let {id} = req.params;
        let {title, description} = req.body;

        let updatedNote = await NotesModel.findByIdAndUpdate(id, {title, description}, {new: true});

        return res.status(200).json({
            message: 'Note Entity Updated Successfully',
            data: updatedNote
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

const deleteNoteController = async (req, res) => {
    try{
        let {id} = req.params;

        await NotesModel.findByIdAndDelete(id);

        res.status(200).json({
            message: 'Note deleted successfully'
        })
    }catch(error){
        console.log(error);
        message: 'Internal server error'
    }
}

module.exports = {
    notesCreateController,
    updateNotesController,
    updateNoteEntityController,
    getAllNotesController,
    getOneNoteController,
    deleteNoteController
}