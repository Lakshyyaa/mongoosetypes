import mongoose from "mongoose";
type userInterface{
  name:string,
  rollno:number,
  courses:string[]?
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
