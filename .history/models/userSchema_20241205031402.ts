import mongoose from "mongoose";
interface UserInterface extends Document{
  name: string;
  rollno: number;
  courses?: string[];
}
const userSchema = new mongoose.Schema<UserInterface>({
  name: { type: String, required: true },
  rollno: { type: Number, required: true, unique: true },
  courses: { type: [String] },
});
const User = mongoose.model<UserInterface>("User", userSchema);
export { User, userSchema };
