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
const GET = async () => {
  try {
    const obj = await User.find();
    return NextResponse.json({ count: obj.length });
  } catch (error) {
    console.error(error);
  }
};

// update
const PATCH = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const obj = await User.findOneAndUpdate(
      { rollno: body.rollno },
      { name: body.name },
      { new: true }
    ).lean();
    return NextResponse.json({ updated: obj. });
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
