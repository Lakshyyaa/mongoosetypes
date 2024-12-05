import mongoose from "mongoose";
const dbUrl = "mongodb://localhost:27017";
const connect = async () => {
    if(global.connected)
    {
        return
    }
  const x = await mongoose.connect(dbUrl);
  if (x) {
    global.connected=true
    console.log("connected");
  } else {
    console.log("nono");
  }
};
export { connect };