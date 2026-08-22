const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://sauryansh007_db_user:iBWTCWVjOSPCfh1o@cluster0.b7zgric.mongodb.net/");
        console.log("mongodb connected");
    } catch (error) {
        console.log("error while connecting db", error);
    }
}

module.exports = connectDb;