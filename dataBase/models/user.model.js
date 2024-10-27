import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minLength : [3, "Name must be at least 3 characters"],
        maxLength : 50
    },
    email : {
        type : String,
        required: true,
        unique : true
    },
    password : {
        type : String,
        required: true,
        minLength:[6,"password must be at least 6 characters"],
    },
    role: {
        type : String,
        enum: ["user","admin"],
        default : "user"
    }
})

export const userModel = mongoose.model("user",userSchema)