const express = require('express');

const router = express.Router();

const upload = require('../config/user.multer');
const createUserController = require('../controller/user.controller');

router.post('/create',upload.array('files', 5), createUserController);

module.exports = router;