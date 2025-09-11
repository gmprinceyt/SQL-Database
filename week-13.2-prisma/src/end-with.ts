import { prisma } from "./debug-logs.js";

const FindUsers = async () => {
  try {
    const User = await prisma.user.findMany({
      where: {
        email: {
          endsWith: "gmail.com",
        },
        posts: {
          /// Has atleast one post published
          some: {
            published: true,
          },
        },  
      },
      include: {
        posts: {
            where: {
                published: true
            }
        }
      }
    });


    console.log(User);
    await prisma.$disconnect();
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

FindUsers();
