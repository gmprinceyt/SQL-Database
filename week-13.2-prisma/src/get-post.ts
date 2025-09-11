import { prisma } from "./index.js";

const create_users = async () => {
  try {
    const All_Posts  = await prisma.post.findMany({
        include: {
            author: {
                select: {name: true, } // Join Data With User name
            }
        }
    }) // Get All Post in Database has
    const Post = await prisma.post.findUnique({
        where: {authorId: 11, id:3}, 
    })
    console.log(All_Posts);
    console.dir(Post);
    await prisma.$disconnect();
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

create_users();
