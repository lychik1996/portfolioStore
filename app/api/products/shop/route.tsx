import { prisma } from '@/lib/prisma';

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const page = Number(url.searchParams.get('page'));
  const counts = Number(url.searchParams.get('count'));

  const sizes = url.searchParams.getAll('sizes[]');
  const colors = url.searchParams.getAll('colors[]');
  const prices = url.searchParams.getAll('prices[]');
  const brands = url.searchParams.getAll('brands[]');
  const collections = url.searchParams.get('collections');
  const tags = url.searchParams.getAll('tags[]');

  const priceFilters = prices.map((priceRange) => {
    if (priceRange.includes('more')) {
      const minPrice = Number(priceRange.split(' - ')[0].replace('$', ''));
      return {
        price: {
          gte: minPrice,
        },
      };
    } else {
      const [minPrice, maxPrice] = priceRange
        .replaceAll('$', '')
        .split(' - ')
        .map(Number);
      return {
        price: {
          gte: minPrice,
          lte: maxPrice,
        },
      };
    }
  });

  try {
    if (!page || !counts) {
      const countItems = await prisma.product.count({
        where: {
          ...(sizes.length > 0 && {
            sizes: { hasSome: sizes },
          }),
          ...(colors.length > 0 && {
            colors: { hasSome: colors },
          }),
          ...(priceFilters.length > 0 && {
            OR: priceFilters,
          }),
          ...(brands.length > 0 && {
            brand: { in: brands },
          }),
          ...(collections &&
            collections !== 'All products' && {
              collection: { hasSome: [collections.toLowerCase()] },
            }),
          ...(tags.length > 0 && {
            tags: { hasSome: tags },
          }),
        },
      });
      console.log(countItems);
      
      return new Response(JSON.stringify(countItems), { status: 200 });
    } else {
      const skip = (page - 1) * counts;
      const take = counts;

      const products = await prisma.product.findMany({
        skip: skip,
        take: take,
        where: {
          ...(sizes.length > 0 && {
            sizes: { hasSome: sizes },
          }),
          ...(colors.length > 0 && {
            colors: { hasSome: colors },
          }),
          ...(priceFilters.length > 0 && {
            OR: priceFilters,
          }),
          ...(brands.length > 0 && {
            brand: { in: brands },
          }),
          ...(collections &&
            collections !== 'All products' && {
              collection: { hasSome: [collections.toLowerCase()] },
            }),
          ...(tags.length > 0 && {
            tags: { hasSome: tags },
          }),
        },
      });

      const formattedProducts = products.map((item) => ({
        name: item.name,
        src: item.bigImgs[0],
        price: item.price,
        oldPrice: item.oldprice || null,
        colors: item.colors,
        counts: item.counts,
        id:item.id,
      }));
      return new Response(JSON.stringify(formattedProducts), { status: 200 });
    }
  } catch {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
    });
  }
};
