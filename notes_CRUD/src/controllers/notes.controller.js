const NotesModel = require('../models/notes.model');

const createNotesController = async (req, res) => {
    try{
        let {title, description} = req.body;
        let newNotes = await NotesModel.create({title, description});
        return res.status(201).json({
            message: "note created successfully",
            data: newNotes
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

const getAllNotesController = async (req, res) => {
    try{
        let notes = await NotesModel.find();
        return res.status(200).json(notes);
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const getSingleNoteController = async (req, res) => {
    try{
        let id = req.params.id;
        let note = await NotesModel.findById(id);
        return res.status(200).json(note);
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const updateNotesController = async (req, res) => {
    try{
        let updatedNote = await NotesModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.status(200).json(updatedNote);
    }catch(error){
        console.log(error);
        return res.status(500). json({
            message: "Internal Server Error"
        })
    }
}

const deleteNotesController = async (req, res) => {
    try{
        await NotesModel.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Note Deleted Successfully!"
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
module.exports = {
    createNotesController,
    getAllNotesController,
    getSingleNoteController,
    updateNotesController,
    deleteNotesController
}