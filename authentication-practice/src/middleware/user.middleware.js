import jwt from 'jsonwebtoken'
import { config } from '../config/config.js';
import UserModel from '../models/user.model.js';

export const authenticator = async (req, res, next) =>{
    const token = req.headers.authorization;
    const data = jwt.verify(token, config.ACCESS_JWT_SECRET);

    const user = await UserModel.findById(data.id);

    req.user = user;
    
    next();
}