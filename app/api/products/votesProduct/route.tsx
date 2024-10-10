import getUser from "@/lib/getUser";
import { prisma } from "@/lib/prisma";

export const PATCH = async(req:Request)=>{
    const {email, rating, id} = await req.json();
    
    
    if(!rating || !email || !id){
        return new Response(
            JSON.stringify({ message: 'Missing required fields' }),
            { status: 400 })
    }
    try{
        const user = await getUser(email);
        if(!user){
            return new Response(JSON.stringify({message:"We can't find user"}),{status:500})
        };
        
        const product = await prisma.product.findUnique({
            where: {
                id
            }
        });

        if(!product){
            return new Response(JSON.stringify({message:"We can't find product"}),{status:500})
        }
        
        const counts = product.votesCount.length;
        const currentRating = product.rating;
        let newRating;
        let updateRating;
        if(product.votesCount.includes(user.id)){
            newRating = ((counts-1)*currentRating + rating)/counts;
            updateRating = await prisma.product.update({
                where:{
                    id:product.id
                },
                data:{
                    rating:newRating
                }
            }) 
        }else{
            newRating =(counts*currentRating+rating)/(counts+1);
            updateRating = await prisma.product.update({
                where:{
                    id:product.id
                },
                data:{
                    rating:newRating,
                    votesCount:{push:user.id}
                }
            })
        }
        let formattedRating = {
            rating: updateRating.rating,
            votesCount:updateRating.votesCount.length
        };
        console.log(formattedRating);
        
        return new Response(JSON.stringify(formattedRating),{status:200})
    }catch{
        return new Response(JSON.stringify({ message: 'Error updating product' }), {
            status: 500,
          });
    }
}