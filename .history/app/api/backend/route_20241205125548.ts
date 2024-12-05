import { User } from "@/models/userSchema";
import { connect } from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

// create
const POST = async (req: NextRequest) => {
  try {
    await connect();
    const body = await req.json();
    const user = await User.create({
      name: body.name,
      rollno: body.rollno,
    });
    return NextResponse.json({ created: user._id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e });
  }
};

// read
const GET = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const obj = await User.findOne({ rollno: body.rollno }).lean();
    return NextResponse.json({ rollno: obj?.rollno, courses: obj?.courses });
  } catch (error) {
    console.error(error);
  }
};

// update
const PATCH = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const obj = await User.findOne({ rollno: body.rollno }).lean();
    return NextResponse.json()
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
