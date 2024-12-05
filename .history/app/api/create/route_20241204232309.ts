import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
  try {
    const body = await req.json;
    console.log(body);
    return NextResponse.json({ s: 1 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ s: 177 });
  }
};
export { POST };
