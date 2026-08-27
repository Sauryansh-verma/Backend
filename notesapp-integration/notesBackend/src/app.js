const express = require('express');
const connectDB = require('./config/db');
const noteRouter = require('./router/notes.route');


const app = express();
connectDB();

app.use(express.json());


app.use('/notes', noteRouter);

module.exports = app;