import { prisma } from "./prisma";

export default async function getUser(email:string) {
    const user = await prisma.user.findUnique({
        where:{email}
    })
    return user
}