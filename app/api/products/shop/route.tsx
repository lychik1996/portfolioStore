import { prisma } from "@/lib/prisma";

export const GET = async(req:Request)=>{
    const url = new URL(req.url);
    const page = Number(url.searchParams.get('page'));
    const counts = Number(url.searchParams.get('count'));
    
    
    try{
        if(!page|| !counts){
            const countItems = await prisma.product.count();
            return new Response(JSON.stringify(countItems),{status:200})
        }else{
            const skip = (page-1)*counts;
            const take = counts;
            const products = await prisma.product.findMany({
                skip:skip,
                take:take
            });
            
            const formattedProducts = products.map(item=>({
                name:item.name,
                src:item.bigImgs[0],
                price:item.price,
                oldPrice: item.oldprice || null,
                colors:item.colors,
                counts:item.counts,
            }))
            console.log(formattedProducts);
            
            return new Response(JSON.stringify(formattedProducts),{status:200})
        }
    }catch{
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
}