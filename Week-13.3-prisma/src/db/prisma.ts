import { PrismaClient } from "../../generated/prisma/index.js";
export const prisma = new PrismaClient({ log: ["info", "query"] });

export async function Connect() {
  try {
    await prisma.$connect();
    console.log("Database Connnected ✅");
  } catch (error) {
    console.log("Databse Error: ", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};


