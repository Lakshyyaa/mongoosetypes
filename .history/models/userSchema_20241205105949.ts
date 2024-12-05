import mongoose, { Document, Schema } from "mongoose";
interface UserInterface extends Document {
  name: string;
  rollno: number;
  courses?: string[];
}
const userSchema = new Schema<UserInterface>({
  name: { type: String, required: true },
  rollno: { type: Number, required: true, unique: true },
  courses: { type: [String], default: [] }, // Optional array of strings
});

// Create the model with the UserInterface type
const User = mongoose.model<UserInterface>("User", userSchema);

export { User, type UserInterface };
