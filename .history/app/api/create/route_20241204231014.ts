import { NextRequest, NextResponse } from "next/server"

const POST=async(req:NextRequest)=>{
    try{

    }
    catch(e)
    const body=req.json();
    console.log(body)
    return NextResponse.json({"s":1})
}
export {POST}