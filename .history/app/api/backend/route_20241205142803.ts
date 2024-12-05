import { User } from "@/models/userSchema";
import { connect } from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
let global = 0;
// create
const POST = async (req: NextRequest) => {
  try {
    await connect();
    const body = await req.json();
    const user = await User.create({
      name: body.name,
      rollno: global++,
    });
    const obj = user.toObject();
    return NextResponse.json({ created: obj._id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e });
  }
};

// read
import { User } from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
  try {
    const body = await req.json();

    // Query the user by rollno
    const obj = await User.findOne({ rollno: body.rollno }).lean();

    if (!obj) {
      // If no user is found, return an error message
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the user data
    return NextResponse.json({ rollno: obj.rollno, name: obj.name });
  } catch (error) {
    console.error(error);

    // If an error occurs, return an error response
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export { GET };


// update
const PATCH = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const obj = await User.findOneAndUpdate(
      { rollno: body.rollno },
      { name: body.name },
      { new: true }
    ).lean();
    return NextResponse.json({ updated: obj?._id });
  } catch (error) {
    console.error(error);
  }
};

// delete
const DELETE = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const obj = await User.deleteOne({ rollno: body.rollno }).lean();
    return NextResponse.json({ deleted: obj });
  } catch (error) {
    console.error(error);
  }
};

export { POST, GET, PATCH, DELETE };
