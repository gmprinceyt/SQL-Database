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

async function getTodos(userId:number){
  try {
    const response = await prisma.todo.findMany({
      where: {userId}
    });
    console.log(response)
  } catch (error){
    console.log(error)
  }
}
getTodos(1);


async function getTodosWithUser(userId: number){
  try {
    const response = await prisma.todo.findMany({
      where: {userId},
      select: {
        title: true,
        description: true,
        done: true,
        user: true // Join User Data with todos
      }
    })
  } catch (error) {
    console.log(error)
  }
};

getTodosWithUser(1);