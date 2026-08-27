const NotesModel = require('../models/notes.model');


const createNotesController = async (req, res) => {
    try{
        const {title, description} = req.body;
        const newNote = await NotesModel.create({title, description});
        res.status(201).json({
            message: 'Note created successfully',
            data: newNote
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

const getAllNotesController = async (req, res) => {
    try{
        const allNotes = await NotesModel.find();
        res.status(200).json({
            message: 'All notes fetched successfully',
            data: allNotes
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

const getOneNoteController = async (req, res) => {
    try{
        const {id} = req.params;
        const note = await NotesModel.findById(id);
        res.status(200).json({
            message: 'Note fetched successfully',
            data: note
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

const updateNotesController = async (req, res) => {
    try{
        const {title, description} = req.body;
        const note = await NotesModel.findByIdAndUpdate(req.params.id, {title, description}, {new: true});
        res.status(200).json({
            message: 'Note updated successfully',
            data: note
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

const updateNotesEntityController = async (req, res) => {
    try{
        const {title, description} = req.body;
        const note = await NotesModel.findByIdAndUpdate(req.params.id, {title, description}, {new: true});
        res.status(200).json({
            message: 'Note updated successfully',
            data: note
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

const deleteNotesController = async (req, res) => {
    try{
        await NotesModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Note deleted successfully',
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

module.exports = {
    createNotesController,
    getAllNotesController,
    deleteNotesController,
    updateNotesEntityController,
    updateNotesController,
    getOneNoteController
}