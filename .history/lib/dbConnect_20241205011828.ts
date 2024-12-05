// import mongoose from "mongoose";
// const dbUrl = "mongodb://localhost:27017";
// const connect = async () => {
//     if(global.connected)
//     {
//         return
//     }
//   const x = await mongoose.connect(dbUrl);
//   if (x) {
//     global.connected=true
//     console.log("connected");
//   } else {
//     console.log("nono");
//   }
// };
// export { connect };

// declare global{
//     var connected: boolean
// }






const makeAIClient = () => {
  return "ss";
};

declare global {
  // Use `let` instead of `var` to avoid ESLint error
  let globalClientAI: ReturnType<typeof makeAIClient> | undefined;
}

const anthropic: ReturnType<typeof makeAIClient> =
  globalThis.globalClientAI ?? makeAIClient();

export { anthropic };

if (process.env.NODE_ENV !== "production") {
  globalThis.globalClientAI = anthropic;
}
