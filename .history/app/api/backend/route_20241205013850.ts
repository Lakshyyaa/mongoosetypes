import { User } from "@/models/userSchema";
import { connect } from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
// create
const POST = async (req: NextRequest) => {
  try {
    await connect();
    const body = await req.json();
    await User.create({
      name:body.name,
      ag
    })
    // return NextResponse.json({ created:  });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ s: 177 });
  }
};
// read
const GET = async (req: NextRequest) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
// update
const PATCH = async (req: NextRequest) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
// delete
const DELETE = async (req: NextRequest) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

export { POST, GET, PATCH, DELETE };
