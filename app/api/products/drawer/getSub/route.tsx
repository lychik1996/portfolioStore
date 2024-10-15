import getUser from "@/lib/getUser";
import { prisma } from "@/lib/prisma";

export const GET = async(req:Request)=>{
    const url = new URL(req.url);
    const email = url.searchParams.get('email');
  
    if (!email) {
      return new Response(
        JSON.stringify({ message: 'Email parameter is missing' }),
        { status: 400 }
      );
    }
    try{
        const user = await getUser(email);
        if(!user){
            return new Response(JSON.stringify({message:"Failed to get user"}),{status:400})
        };
        const drawer = await prisma.drawer.findUnique({
            where:{userId:user.id},
            select:{subtotal:true},
        });
        if (!drawer) {
            return new Response(JSON.stringify({ message: 'Failed to get drawer' }), {
              status: 400,
            });
        }
        return new Response(JSON.stringify(drawer.subtotal),{status:200})
      }catch{
        return new Response(JSON.stringify({message:"Something went wrong"}),{status:400})
      }
}