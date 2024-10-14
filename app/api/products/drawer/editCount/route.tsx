import getUser from "@/lib/getUser";
import { prisma } from "@/lib/prisma";

export const POST =async (req:Request)=>{
    const {productId, email, action}= await req.json();
    if (!productId || !email || !action) {
        return new Response(
          JSON.stringify({ message: 'Email/productId/action is missing' }),
          { status: 400 }
        );
      }
      try{
        const user = await getUser(email);
        if (!user) {
            return new Response(JSON.stringify({ message: 'Failed to getUser' }), {
              status: 400,
            });
          }
          const drawer = await prisma.drawer.findUnique({
            where: { userId: user.id },
            include: { items: true }
        });
        
        if (!drawer) {
            return new Response(JSON.stringify({ message: 'Failed to get drawer' }), { status: 400 });
        }
        const existingItem = drawer.items.find(item => item.productId === productId);
        if(!existingItem){
            return new Response(JSON.stringify({message:"Failed to get Product"}),{status:400})
        }
        if(action==='increase'){
            await prisma.drawerItem.update({
                where:{id:existingItem.id},
                data:{countsDrawer:existingItem.countsDrawer+1}
            })
        }else{
            if(existingItem.countsDrawer>1){
                await prisma.drawerItem.update({
                    where:{id:existingItem.id},
                    data:{countsDrawer:existingItem.countsDrawer-1}
                })
            }else{
                await prisma.drawerItem.delete({
                    where:{id:existingItem.id}
                })
            }
        }
        return new Response(JSON.stringify({ message: "Item quantity updated successfully" }), { status: 200 });
      }catch{
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
      }
}