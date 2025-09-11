import { prisma } from "./index.js";

const update_user = async () => {
  try {
    const User = await prisma.user.update({
        where: {id: 11},
        data: {
            name: "Vishal"
        }
    });

    console.log(User, "Updated!")
    await prisma.$disconnect();
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

update_user();
