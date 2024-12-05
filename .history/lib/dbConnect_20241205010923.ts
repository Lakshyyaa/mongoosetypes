import mongoose from "mongoose";

const dbUrl = "mongodb://localhost:27017";
const connect = async () => {
  const x = await mongoose.connect(dbUrl);
  if (x) {
    console.log("connected");
  } else {
    console.log("nono");
  }
};
export { connect };


// import Anthropic from "@anthropic-ai/sdk";
// const makeAIClient = () => {
//   return new Anthropic();
// };
// declare global {
//   var globalClientAI: ReturnType<typeof makeAIClient> | undefined;
// }
// const anthropic: ReturnType<typeof makeAIClient> =
//   globalThis.globalClientAI ?? makeAIClient();
// export { anthropic };

// if (process.env.NODE_ENV !== "production")
//   globalThis.globalClientAI = anthropic;
