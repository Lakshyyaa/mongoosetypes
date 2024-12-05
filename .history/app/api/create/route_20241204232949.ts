import { NextRequest, NextResponse } from "next/server";
interface Ok {
  name: string;
  age: number;
}
const POST = async (req: NextRequest) => {
  try {
    const newUser: Ok = {
      name: "aksfsd",
      age: 353,
    };
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ s: 1 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ s: 177 });
  }
};

export { POST };
