import { NextRequest, NextResponse } from "next/server"

const GET=async(req:NextRequest)=>{
    return NextResponse.json({"s":1})
}
export {GET}