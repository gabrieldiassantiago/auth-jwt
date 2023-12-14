
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function connection() {
    try {
        await mongoose.connect(process.env.MONGO_URL || "vai saber"); 
        console.log('connection true')
    } catch (err) {
        console.log(err)
    }
}
