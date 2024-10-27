import { userModel } from "../../../dataBase/models/user.model.js";
import catchError from "../../utils/catchAsyncError.js";
import bcrypt from "bcrypt";

const signup = catchError (async(req,res,next) =>{

    const {name,email,password} = req.body;

    let user = await userModel.findOne({email})
    if(user){
        return res.status(400).json({message: "User already exists"})
    }else{
        const hash = bcrypt.hashSync(password,8);
        await userModel.insertMany({name,email,password:hash})
        res.status(200).json({message: "User created successfully"})
    }
})  

export {
    signup
}