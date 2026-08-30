const express = require('express');
const upload = require('./config/multer');
const app = express();

app.post('/',upload.single('image'), (req,res) => {
    console.log(req.file);
} )

module.exports = app;