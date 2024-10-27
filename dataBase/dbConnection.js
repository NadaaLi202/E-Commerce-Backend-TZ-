
import mongoose from "mongoose";

export const dbConnection = () => {

    mongoose.connect("mongodb://localhost:27017/ECommerce").then(
        () => {
            console.log("Connected to database successfully");
        })
        .catch((error) => {

            console.log("Error connection to database",error);
        })
    }