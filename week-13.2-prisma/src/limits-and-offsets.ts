import { prisma } from "./debug-logs.js";


const pagenation = async () => {
  try {
    let res = await prisma.post.findMany({
      take: 3,
      skip:10 
    });
    console.log(res);

    await prisma.$disconnect();
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

pagenation();
