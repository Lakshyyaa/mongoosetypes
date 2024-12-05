import { NextResponse } from "next/server"

const POST=async()=>{
    return NextResponse.json({"s":1})
}
export {POST}