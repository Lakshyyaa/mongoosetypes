import mongoose from "mongoose";
const dbUrl = "mongodb://localhost:27017";
let isConn = false;
const connect = async () => {
  if (isConn) {
    return;
  }
  const x = await mongoose.connect(dbUrl);
  if (x) {
    isConn = true;
    console.log("connected");
  } else {
    console.log("nono");
  }
};
export { connect };
