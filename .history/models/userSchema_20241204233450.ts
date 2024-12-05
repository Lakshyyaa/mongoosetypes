import mongoose from "mongoose";
const userInterface{
  name:string,
  
}
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rollno: { type: Number, required: true, unique: true },
    courses: { type: [String] },
  },
  {
    strict: false,
  }
);
export { userSchema };
