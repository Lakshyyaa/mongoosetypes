import { , NextResponse } from "next/server"

const GET=async()=>{
    return NextResponse.json({"s":1})
}
export {GET}