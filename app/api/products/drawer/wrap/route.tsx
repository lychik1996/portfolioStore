import getUser from "@/lib/getUser";
import { prisma } from "@/lib/prisma";

export const POST = async(req:Request)=>{
    const {wrap,email} = await req.json();
    if (!email) {
        return new Response(
          JSON.stringify({ message: 'Email/wrap parameter is missing' }),
          { status: 400 }
        );
      }
      try{
          const user = await getUser(email);
          if(!user){
              return new Response(JSON.stringify({message:"Failed to get user"}),{status:400})
          };
          
          
          const drawer = await prisma.drawer.update({
              where:{userId:user.id},
              data:{
                wrap:wrap,
                subtotal:wrap ? { increment: 10 } : {decrement:10},
              },
              select:{wrap:true},
          });
          if (!drawer) {
              return new Response(JSON.stringify({ message: 'Failed to get drawer' }), {
                status: 400,
              });
          }
          return new Response(JSON.stringify(drawer.wrap),{status:200})
        }catch{
          return new Response(JSON.stringify({message:"Something went wrong"}),{status:400})
        }
}