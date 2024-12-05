import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
  try {
    const body = await req.json(); // Await the promise
    console.log(body);
    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return NextResponse.json(
      { success: false, error: error },
      { status: 400 }
    );
  }
};

export { POST };
