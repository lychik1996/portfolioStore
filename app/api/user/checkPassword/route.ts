import getUser from "@/lib/getUser";

export const POST = async(req:Request)=>{
    const {password,email} = await req.json();
    try{
        if(!email){
            return new Response(JSON.stringify({ message: "Email parameter is missing" }), { status: 400 });
        }
        const user = await getUser(email);
        const checkPass = user?.password===password;
        return new Response(JSON.stringify(checkPass),{status:200})
    }catch{
        return new Response(JSON.stringify({message:'Something went wrong'}),{status:500})
    }
}