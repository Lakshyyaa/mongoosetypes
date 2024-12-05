import { NextResponse } from "next/server";

const GET = async () => {
  return NextResponse.json({ s: 11 });
};
export { GET };
