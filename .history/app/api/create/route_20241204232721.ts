import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    // verify if the body is of type user
    
    return NextResponse.json({ s: 1 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ s: 177 });
  }
};

export { POST };
