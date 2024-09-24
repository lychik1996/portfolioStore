import db from "@/lib/db";

export const POST = async (req: Request) => {
  const { email } = await req.json();
  try {
    const existingEmail = await db.subscribe.findUnique({
      where: { email },
    });
    if (existingEmail) {
      return new Response(JSON.stringify({ message: "Email already exists" }), { status: 400 });
    }

    const newSubscribe = await db.subscribe.create({
      data: { email },
    });

    return new Response(JSON.stringify({ message: "Subscribed successfully!" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
};