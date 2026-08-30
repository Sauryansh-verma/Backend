const express = require('express');
const connectDB = require('./config/db');
const cardRouter = require('./router/cards.route');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}))

connectDB();
app.use(express.json());

app.use('/card', cardRouter);

module.exports = app;