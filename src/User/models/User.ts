import mongoose from "mongoose";

const User = {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
}

const UserSchema = new mongoose.Schema(User)

export const UserModel = mongoose.model("User", UserSchema);