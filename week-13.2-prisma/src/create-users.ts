import { prisma } from "./index.js";

const create_users = async () => {
  try {
    const User = await prisma.user.create({
      data: {
        email: "gmprince@gmail.com",
        name: "Prince",
      },
    });
    console.log(User);
    await prisma.$disconnect();
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

create_users();
