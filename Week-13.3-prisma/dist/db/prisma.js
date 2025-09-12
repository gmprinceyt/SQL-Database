import { PrismaClient } from "../../generated/prisma/index.js";
export const prisma = new PrismaClient({ log: ["info", "query"] });
export async function Connect() {
    try {
        const connectionInstance = await prisma.$connect();
        console.log("Database Connnected ✅", connectionInstance);
    }
    catch (error) {
        console.log("Databse Error: ", error);
        await prisma.$disconnect();
        process.exit(1);
    }
}
;
