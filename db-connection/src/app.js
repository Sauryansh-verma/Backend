const express = require('express');
const connectDb = require("./config/db");
const notesModel = require('./models/note.model');
const app = express();
app.use(express.json());
connectDb();

app.post('/create', async (req, res) => {
    const {title, description} = req.body;
    const newNote = await notesModel.create({
        title,
        description
    })
    res.send({
        success: true,
        message: "note created successfully",
        data: newNote
    });
})

module.exports = app;