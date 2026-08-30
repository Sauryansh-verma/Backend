const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const notesRoute = require('./router/notes.route');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}))
connectDB();
app.use(express.json());
app.use('/notes', notesRoute);

module.exports = app;