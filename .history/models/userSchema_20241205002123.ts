import mongoose from "mongoose";
interface userInterface {
  name: string;
  rollno: number;
  courses?: string[];
}
const userSchema = new mongoose.Schema<userInterface>(
  {
    name: { type: String, required: true },
    rollno: { type: Number, required: true, unique: true },
    courses: { type: [String] },
  }
);
const User = mongoose.model<userInterface>("User", userSchema);
export { User };