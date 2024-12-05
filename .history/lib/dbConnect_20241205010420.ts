import mongoose from "mongoose";

const dbUrl = "mongodb://localhost:27017";
const connect = async () => {
    
  const x = await mongoose.connect(dbUrl);
  if(x)
  {
    console.log("connected")
  }else{
    console.log("nono")
  }
};
export {connect}