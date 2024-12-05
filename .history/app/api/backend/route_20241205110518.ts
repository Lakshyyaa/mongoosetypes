import { User } from "@/models/userSchema";
import { connect } from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

// create
const POST = async (req: NextRequest) => {
  try {
    await connect();
    const body = await req.json();
    // Type body to UserInterface
    const user=await User.create({
      
    })
    return NextResponse.json({ created: user._id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ s: 177 });
  }
};

// read
const GET = async (req: NextRequest) => {
  try {
    const obj=await User.find({name:"laks"})
  } catch (error) {
    console.error(error);
  }
};

// update
const PATCH = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log(body);
  } catch (error) {
    console.error(error);
  }
};

// delete
const DELETE = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log(body);
  } catch (error) {
    console.error(error);
  }
};

export { POST, GET, PATCH, DELETE };
