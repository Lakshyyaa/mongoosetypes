import mongoose from "mongoose";
interface UserInterface {
  name: string;
  rollno: number;
  courses?: string[];
}
const userSchema = new mongoose.Schema<UserInterface>({
  name: { type: String, required: true },
  rollno: { type: Number, required: true, unique: true },
  courses: { type: [String], default: [] },
});
const User = mongoose.model<UserInterface>("User", userSchema);
type RawUserDocument = InferRawDocType<typeof userSchema>;

useRawDoc(doc.toObject());

function useRawDoc(doc: RawUserDocument) {
  // ...
}
export { User, type UserInterface };
