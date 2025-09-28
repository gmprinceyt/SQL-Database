import { PrismaClient } from "prisma";

const prisma = new PrismaClient();

async function insertDataIntoUsers(
  name: string,
  email: string,
  password: string,
  phone: number
) {
  try {
    const response: Record<string, string> = await prisma.user.create({
      data: {
        name,
        email,
        password,
        phone,
      },
    });
    console.log("Data Added :", response);
  } catch (error) {
    console.log(error);
  }
}

insertDataIntoUsers("Prince", "prince@gmail.com", "PRINCE", 987654321);
