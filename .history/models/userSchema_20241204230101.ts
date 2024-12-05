import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollno: { type: Number, required: true, unique: true },
  courses: {type:String[],}
});
export { userSchema };
