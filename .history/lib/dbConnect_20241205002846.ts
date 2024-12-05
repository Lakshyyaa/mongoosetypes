import mongoose from "mongoose";

const dbUrl = "http://localhost:27017/";
const connect = async () => {
  const x = await mongoose.connect(dbUrl);
  
};
