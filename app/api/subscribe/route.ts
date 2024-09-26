import { prisma } from "@/lib/prisma";


export const POST = async (req: Request) => {
  const { email } = await req.json();
  try {
    const existingEmail = await prisma.subscribe.findUnique({
      where: { email },
    });
    if (existingEmail) {
      return new Response(JSON.stringify({ message: "Email already exists" }), { status: 400 });
    }

    const newSubscribe = await prisma.subscribe.create({
      data: { email },
    });

    return new Response(JSON.stringify({ message: "Subscribed successfully!" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
};