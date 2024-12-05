import { NextRequest, NextResponse } from "next/server";
const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log(body);
    function ok(val) {
      return val
    }
    const b=ok(88)
    console.log(b.toUpperCase());
    ok([1, 2, 3]);
    return NextResponse.json({ s: 1 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ s: 177 });
  }
};

export { POST };
