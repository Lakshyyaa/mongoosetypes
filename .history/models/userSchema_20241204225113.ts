import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name: String
    age: String
})
export {userSchema}