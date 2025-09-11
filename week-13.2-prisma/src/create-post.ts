import { prisma } from "./index.js";

const create_post = async () => {
  try {
    const post = await prisma.post.create({
      data: {
        title: "Go GYM at 05:00",
        content: "Chest Day",
        author: {
          connect: { id: 9 },
        },
      },
    });
    console.log(post);
    await prisma.$disconnect(); // Disconnect After Created Post
  } catch (error) {
    console.log(error);
    await prisma.$disconnect(); // Disconnect After Thow any Erorr 
    process.exit(1);
  }
};

create_post();
