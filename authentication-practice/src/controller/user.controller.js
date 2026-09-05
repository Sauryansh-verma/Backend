import UserModel from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { config } from '../config/config.js';

export const createUserController = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = await UserModel.create({
            name,
            email,
            password: await bcrypt.hash(password, 10),
        });

        const accessToken = jwt.sign({
            id:user._id
        }, config.ACCESS_JWT_SECRET);

        const refreshToken = jwt.sign({
            id: user._id
        }, config.REFRESH_JWT_SECRET);

        res.status(201).json({
            message: 'User Registered Successfully',
            data: {
                user,
                accessToken,
                refreshToken
            }
        })
    }
    catch(error) {
        console.log('error:',error);
        res.status(500).json({
            message:'Internal Server Error'
        })
    }
}

export const loginUserController = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({
                message: 'Invalid email or password'
            })
        }

        const accessToken = jwt.sign({
            id: user._id,
        }, config.ACCESS_JWT_SECRET);
        const refreshToken = jwt.sign({
            id: user._id,
        }, config.REFRESH_JWT_SECRET);

        res.status(200).json({
            message: 'Login Successful',
            data:{
                user,
                accessToken,
                refreshToken
            }
        })
    }
    catch(error){
        console.log('error', error);
        res.status(500).json({
            message: 'Internal Server Error',
            error: error
        })
    }
}

export const reqHandlerController = (req, res) => {
    console.log(req.user);
    res.status(200).json({
        message: 'ok'
    })
}