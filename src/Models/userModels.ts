import mongoose from "mongoose";

interface UserInter {
    name: string,
    email: string,
    password: string
}

const schema = new mongoose.Schema<UserInter>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.models.user || mongoose.model<UserInter>('user', schema)

export default User; 