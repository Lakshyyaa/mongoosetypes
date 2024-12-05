import { NextResponse } from "next/server"

const POST=async(res:NextRespons)=>{
    const body=req.json();
    return NextResponse.json({"s":1})
}
export {POST}