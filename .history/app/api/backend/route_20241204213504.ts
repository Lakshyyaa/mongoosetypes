import { NextRequest, NextResponse } from "next/server"

const GET=async(req:NextRequest)=>{
    let x=await req.body()
    return NextResponse.json({"s":1})
}
export {GET}