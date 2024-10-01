import connectDB from "./db/dbConnection.js";
import dotenv from "dotenv";

dotenv.config({
    path:"./env"
})

connectDB();