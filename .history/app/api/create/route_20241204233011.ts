import { NextRequest, NextResponse } from "next/server";
interface Ok {
  name: string;
  age: number;
}
const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const newUser: Ok = {
      name: body.name,
      age: body.age
    };
    console.log(body);
    return NextResponse.json({ s: 1 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ s: 177 });
  }
};

export { POST };
