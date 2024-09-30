
import { prisma } from "@/lib/prisma";

export const PATCH = async(req:Request)=>{
    const {email,cvv,expiryDate, cardNumber} = await req.json();
    try{
        if(!email){
            return new Response(JSON.stringify({ message: "Email parameter is missing" }), { status: 400 });
        }
        console.log(expiryDate);
        
        const editUser = await prisma.user.update({
            where:{email},
            data:{
                cvv: cvv || "",
                expiryDate: expiryDate || null,
                cardNumber: cardNumber || ''
            }
        })
        
        
        return new Response(JSON.stringify({ message: `User: ${editUser.name} updated successfully`}), { status: 200 });
    }catch{
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
    
}