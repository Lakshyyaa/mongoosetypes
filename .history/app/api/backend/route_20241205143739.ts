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
    return NextResponse.json({ updated: obj?._id });
  } catch (error) {
    console.error(error);
  }
};

// delete
import { User } from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";

const DELETE = async (req: NextRequest) => {
  try {
    const body = await req.json();

    // Perform the delete operation
    const obj = await User.deleteOne({ rollno: body.rollno });

    // Check if anything was deleted
    if (obj.deletedCount === 0) {
      // If nothing was deleted, return a 404 response
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return a success response
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    // Return a 500 Internal Server Error response in case of an exception
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export { DELETE };

export { POST, GET, PATCH, DELETE };
