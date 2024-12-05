import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name: {type: String, required:true},
    rollno:{type: Number, required:true}
})
export {userSchema}

// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// export default mongoose.models.User || mongoose.model("User", UserSchema);
