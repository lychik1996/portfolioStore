import getUser from '@/lib/getUser';
import { prisma } from '@/lib/prisma';

export const GET = async (req: Request) => {
  const url = new URL(req.url);

  const email = url.searchParams.get('email');

  if (!email) {
    return new Response(
      JSON.stringify({ message: 'Error to get email user' }),
      { status: 400 }
    );
  }
  try {
    const user = await getUser(email);
    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), {
        status: 404,
      });
    }

    const favorites = await prisma.favorite.findMany({
      where: {
        userId: user.id,
      },
      select: {
        products: true,
      },
    });
    const formattedProducts = favorites[0].products.map((item) => ({
        name: item.name,
        src: item.bigImgs[0],
        price: item.price,
        oldPrice: item.oldprice || null,
        colors: item.colors,
        counts: item.counts,
        id:item.id,
        isFavorite:true,
      }));
    return new Response(JSON.stringify(formattedProducts), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ messsage: 'Something wrong' }), {
      status: 400,
    });
  }
};
