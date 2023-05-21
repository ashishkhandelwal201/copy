
import mongoose from "mongoose";
mongoose.set('strictQuery',true);
const url="mongodb://localhost:27017/machinetest";
mongoose.connect(url);
console.log("Successfully connected to mongodb database....");