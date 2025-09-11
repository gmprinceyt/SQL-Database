import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();
async function main() {
    // ... you will write your Prisma Client queries here
    await prisma.user.deleteMany({});
    const res = await prisma.user.create({
        data: {
            email: "gmprince420@gmail.com",
            name: "Prince Kumar",
        }
    });
    console.log(res);
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
