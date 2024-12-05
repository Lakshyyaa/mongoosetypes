import { User, UserInterface } from "@/models/userSchema";
import { connect } from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

// create
const POST = async (req: NextRequest) => {
  try {
    await connect();
    const body = await req.json();
    // Type body to UserInterface
    const user: UserInterface = await User.create({
      name: body.name,
      rollno: body.rollno,
      courses: body.courses,
    });
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
