import getUser from "@/lib/getUser";

export const GET = async (req: Request) => {
    const url = new URL(req.url);
    const email = url.searchParams.get('email');

    
    if (!email) {
        return new Response(JSON.stringify({ message: "Email parameter is missing" }), { status: 400 });
    }

    try {
        const user = await getUser(email);
        
        
        if (!user) {
            return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
        }
        
        
        const { password, ...clearUser } = user;

        
        return new Response(JSON.stringify(clearUser), { status: 200 }); 
    } catch (error) {
        console.error("Error fetching user:", error); 
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
}