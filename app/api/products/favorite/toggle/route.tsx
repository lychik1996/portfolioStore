import getUser from '@/lib/getUser';
import { prisma } from '@/lib/prisma';

export const POST = async (req: Request) => {
  const { email, productId } = await req.json();
  
 
  if (!email || !productId) {
    return new Response(
      JSON.stringify({ message: 'Failed to get email/productID' }),
      { status: 400 }
    );
  }
  
  try {
    
    const user = await getUser(email);
    
    
    if (!user) {
      return new Response(JSON.stringify({ message: 'Failed to get user' }), {
        status: 400,
      });
    }
    
   
    const check = await prisma.favorite.findFirst({
      where: {
        userId: user.id,
        products: {
          some: { id: productId },
        },
      },
    });
   
    
    if (check) {
        await prisma.favorite.update({
            where: { userId: user.id },
            data: {
              products: {
                disconnect: { id: productId },
              },
            },
          });
    } else {
        await prisma.favorite.update({
            where: { userId: user.id },
            data: {
              products: {
                connect: { id: productId },
              },
            },
        });
    }
    
    return new Response(
      JSON.stringify({ message: 'Favorite updated successfully' }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Something went wrong'}), {
      status: 500,
    });
  }
};
