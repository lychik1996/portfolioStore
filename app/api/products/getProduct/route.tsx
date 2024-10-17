import { prisma } from '@/lib/prisma';

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  
  
  if (!id) {
    return new Response(
      JSON.stringify({ message: "We can't get product id" }),
      { status: 500 }
    );
  }
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    if (!product) {
      return new Response(JSON.stringify({ message: "Can't find product" }), {
        status: 500,
      });
    }
    const formattedProduct = {
      id:product.id,
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
    };
    
    return new Response(JSON.stringify(formattedProduct), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
    });
  }
};
