const express = require('express');
const connectDB = require('./config/db');
const notesRouter = require('./router/notes.route');

const app = express();
connectDB();
app.use(express.json());

app.use('/notes', notesRouter);

module.exports = app;