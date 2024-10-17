import getUser from '@/lib/getUser';
import { prisma } from '@/lib/prisma';

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  const email = url.searchParams.get('email');
  
  if (!id) {
    return new Response(
      JSON.stringify({ message: "We can't get product id" }),
      { status: 500 }
    );
  }
  try {
    const user = email ? await getUser(email) : null;
    const userId = user?.id;

    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        // Якщо користувач залогінений, включаємо улюблені продукти
        favorites: userId ? { where: { userId } } : false,
      },
    });

    if (!product) {
      return new Response(JSON.stringify({ message: "Can't find product" }), {
        status: 500,
      });
    }

    // Логіка для визначення, чи є продукт улюбленим
    const isFavorite = userId ? product.favorites.length > 0 : null;

    const formattedProduct = {
      id: product.id,
      name: product.name,
      smallImg: product.smallImgs,
      bigImgs: product.bigImgs,
      price: product.price,
      oldPrice: product.oldprice,
      counts: product.counts,
      colors: product.colors,
      sizes: product.sizes,
      discountTime: product.discountTime,
      rating: product.rating,
      votesCount: product.votesCount.length,
      isFavorite, 
    };
    
    return new Response(JSON.stringify(formattedProduct), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
    });
  }
};
