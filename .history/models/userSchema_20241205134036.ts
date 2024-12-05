import mongoose from "mongoose";

interface UserInterface {
  name: string;
  rollno: number;
  courses?: string[];
}

// Handle model compilation
let User: mongoose.Model<UserInterface>;

try {
  User = mongoose.model<UserInterface>("User");
} catch (error) {
  User = mongoose.model<UserInterface>(
    "User",
    new mongoose.Schema<UserInterface>({
      name: { type: String, required: true },
      rollno: { type: Number, required: true, unique: true },
      courses: { type: [String], default: [] },
    })
  );
}

export { User, type UserInterface };
