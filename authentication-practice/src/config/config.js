import dotenv from 'dotenv'
dotenv.config();

export const config = {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT,
    REFRESH_JWT_SECRET: process.env.REFRESH_JWT_SECRET,
    ACCESS_JWT_SECRET: process.env.ACCESS_JWT_SECRET
}