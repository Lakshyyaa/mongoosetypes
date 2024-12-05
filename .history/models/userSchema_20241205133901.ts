// import mongoose from "mongoose";
// interface UserInterface {
//   name: string;
//   rollno: number;
//   courses?: string[];
// }
// const userSchema = new mongoose.Schema<UserInterface>({
//   name: { type: String, required: true },
//   rollno: { type: Number, required: true, unique: true },
//   courses: { type: [String], default: [] },
// });
// const User = mongoose.model<UserInterface>("User", userSchema);
// export { User, type UserInterface };


import mongoose, { Document, Schema } from "mongoose";

// Defining the interface for the user document
interface UserInterface extends Document {
  name: string;
  rollno: number;
  courses?: string[];
}

// Defining the user schema
const userSchema = new Schema<UserInterface>({
  name: { type: String, required: true },
  rollno: { type: Number, required: true, unique: true },
  courses: { type: [String], default: [] },
});

// Check if the model already exists to avoid overwriting it
const User =
  mongoose.models.User || mongoose.model<UserInterface>("User", userSchema);

// Export the model and interface
export { User, UserInterface };
