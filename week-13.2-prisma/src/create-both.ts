import { prisma } from "./index.js";

const create_both = async () => {
  try {
    const UserWithPosts = await prisma.user.create({
      data: {
        email: "price@gmail.com",
        name: "Prince",
        posts: {
            create: [
                {
                    title: "Hello From Both Creation " // Don't Need To add AuthodId if Creating Like these
                },
                {
                    title: "Do Something in code"
                }
            ]
        }
      },
    });
    console.log(UserWithPosts);
    await prisma.$disconnect();
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

create_both();
