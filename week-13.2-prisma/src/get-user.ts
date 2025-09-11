import { prisma } from "./index.js";

const get_user = async () => {
  try {
    const User_Many = await prisma.user.findMany({}) // Get All User In Databse
    const User = await prisma.user.findMany({
        where: {id: 11},
        include: {
            posts: true // Get Data with include Post data
        }
    })
    console.dir(User, {depth: null}); // Print Whole User Object 
    console.log(User_Many);
    await prisma.$disconnect();
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

get_user();
