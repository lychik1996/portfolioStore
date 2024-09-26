import axios from "axios";
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { toast } from "sonner";
interface User {
    id: string;
    email: string;
    name: string;
    lastName: string | null;
    telephone: string | null;
    image: string | null;
}
export default function useUser(){
    const {data:session} = useSession();
    const [user,setUser] = useState<User | null>(null);
    useEffect(() => {
        if (session?.user?.email) { 
            axios.get(`/api/user/getUser?email=${encodeURIComponent(session.user.email)}`)
                .then(res => setUser(res.data))
                .catch(() => toast.error("Failed to get User"));
        }
    }, [session]);
    return user
}