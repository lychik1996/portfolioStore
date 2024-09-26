import getUser from "@/lib/getUser";
import { prisma } from "@/lib/prisma";

export const POST=async(req:Request)=>{
    try{
        const {name, lastName, email, telephone, password} = await req.json();
        const existUser = await getUser(email);
        if(existUser){
            return new Response(JSON.stringify({message:'User already exist'}),{status:400})
        }
        const user = await prisma.user.create({
            data:{
                name:name,
                lastName:lastName,
                email:email,
                telephone:telephone,
                password:password
            }
        })
        return new Response(JSON.stringify({message:`User: ${name} create succsesfull`}),{status:200})
    }catch{
        return new Response(JSON.stringify({message:"Somethin went wrong!"}),{status:400})
    }
}