import mongoose from "mongoose";

interface UserInterface {
  name: string;
  rollno: number;
  courses?: string[];
}

// Check if the model is already registered before defining it
const User =
  mongoose.models.User ||
  mongoose.model<UserInterface>(
    "User",
    new mongoose.Schema<UserInterface>({
      name: { type: String, required: true },
      rollno: { type: Number, required: true, unique: true },
      courses: { type: [String], default: [] },
    })
  );

export { User, type UserInterface };
