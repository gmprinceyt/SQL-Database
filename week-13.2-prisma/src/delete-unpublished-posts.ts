import { prisma } from "./index.js";

const delete_unpublished_post = async () => { 
  try {
    const post = await prisma.user.update({ // delete All unpublished Posts. Where  User  { id 11}
        where: {id: 11},
        data: {
            posts: {
                deleteMany: {
                    published: false
                }
            }
        }
    });

    console.log(post, "Deleted!")
    await prisma.$disconnect();
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

delete_unpublished_post();
