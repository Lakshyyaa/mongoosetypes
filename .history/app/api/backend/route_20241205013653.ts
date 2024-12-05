import { connect } from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
// create
const POST = async (req: NextRequest) => {
  try {
    await connect();
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ s: 1 });
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
const PATCH = async (req: NextRequest) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
const DELETE = async (req: NextRequest) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

export { POST, GET, PATCH, DELETE };
