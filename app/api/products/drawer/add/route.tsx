import getUser from '@/lib/getUser';
import { prisma } from '@/lib/prisma';

export const POST = async (req: Request) => {
  const { productId, email, count, color, size } = await req.json();
  if (!productId || !email || !count || !color || !size) {
    return new Response(
      JSON.stringify({
        message: 'Email/productId/count/color/size is missing',
      }),
      { status: 400 }
    );
  }
  try {
    const user = await getUser(email);
    if (!user) {
      return new Response(JSON.stringify({ message: 'Failed to getUser' }), {
        status: 400,
      });
    }
    let drawer = await prisma.drawer.findUnique({
      where: { userId: user.id },
      include: { items: true },
    });
    if (!drawer) {
      return new Response(JSON.stringify({ message: 'Failed to get drawer' }), {
        status: 400,
      });
    }
    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: { price: true, bigImgs: true,name:true },
    });

    if (!product) {
      return new Response(JSON.stringify({ message: 'Product not found' }), {
        status: 404,
      });
    }
    const existingItem = drawer.items.find(
      (item) =>
        item.productId === productId &&
        item.color === color &&
        item.size === size
    );

    if (existingItem) {
      const updatedCount = existingItem.countsDrawer + count;
      await prisma.drawerItem.update({
        where: { id: existingItem.id },
        data: { countsDrawer: updatedCount },
      });
    } else {
      const price = product.price;
      const img = product.bigImgs[0];
      const name = product.name;
      await prisma.drawerItem.create({
        data: {
          drawerId: drawer.id,
          productId: productId,
          countsDrawer: count,
          color: color,
          size: size,
          price: price,
          img: img,
          name:name,
        },
      });
    };
    drawer = await prisma.drawer.findUnique({
      where: { userId: user.id },
      include: { items: true },
    });
    if(!drawer){
      return new Response(JSON.stringify({ message: 'Failed to get drawer' }), {
        status: 400,
      });
    }
    const newSubtotal = drawer.items.reduce((acum, item)=>acum +item.price*item.countsDrawer,0)+(drawer.wrap?10:0);
    
    await prisma.drawer.update({
      where:{id:drawer.id},
      data:{subtotal:newSubtotal}
    })
    return new Response(
      JSON.stringify({
        message: 'Product added/update count to drawer successfully',
      }),
      { status: 200 }
    );
  } catch {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 400,
    });
  }
};
