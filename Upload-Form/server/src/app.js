const express = require('express');
const userRouter = require('./router/user.route');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use('/user', userRouter);

module.exports = app;