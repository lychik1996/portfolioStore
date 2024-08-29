import { NextRequest, NextResponse } from "next/server"

const pathProtect:string[]=[];
export const middleware = (req:NextRequest)=>{
    const {pathname}=req.nextUrl;
    if(pathProtect.some((path)=>pathname.startsWith(path))){
        const token = req.cookies.get('authToken');
        if(!token){
            return NextResponse.redirect(new URL('/login',req.url));
        }
    }
    return NextResponse.next();
}
export const config = {
    matcher:[]
}