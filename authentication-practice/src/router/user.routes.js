import express from 'express'

const router = express.Router();

import {
    createUserController,
    loginUserController,
    reqHandlerController
} from '../controller/user.controller.js'
import { authenticator } from '../middleware/user.middleware.js';

router.post('/register', createUserController);

router.get('/login', loginUserController);

router.get('/me', authenticator, reqHandlerController)

export default router;