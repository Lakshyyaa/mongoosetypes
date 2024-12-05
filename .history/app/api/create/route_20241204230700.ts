import { NextRequest, NextResponse } from "next/server"

const POST=async(req:NextRequest)=>{
    const body=req.json();
    return NextResponse.json({"s":1})
}
export {POST}