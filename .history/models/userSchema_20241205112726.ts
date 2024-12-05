// import mongoose, { Document, Schema } from "mongoose";
interface UserInterface {
  name: string;
  rollno: number;
  courses?: string[];
}
import mongoose from "mongoose";
const userSchema = new mongoose.Schema<UserInterface>({
  name: { type: String, required: true },
  rollno: { type: Number, required: true, unique: true },
  courses: { type: [String], default: [] }
});
const User = mongoose.model<UserInterface>("User", userSchema);
export { User, type UserInterface };
