
import { prisma } from "@/lib/prisma";

export const PATCH = async(req:Request)=>{
    const {email,name,lastName,password, telephone} = await req.json();
    try{
        if(!email){
            return new Response(JSON.stringify({ message: "Email parameter is missing" }), { status: 400 });
        }
        const editUser = await prisma.user.update({
            where:{email},
            data:{
                name,
                lastName: lastName || '',
                telephone:telephone || '',
                ...(password && { password })
            }
        })
        return new Response(JSON.stringify({ message: `User: ${editUser.name} updated successfully`}), { status: 200 });
    }catch{
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
    
}