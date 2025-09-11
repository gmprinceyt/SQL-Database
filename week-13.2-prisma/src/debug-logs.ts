import { PrismaClient } from "../generated/prisma/index.js";

// export const prismaWithLogs = new PrismaClient({ log: ["query", "info"] }); // Show Query logs & infoc for Better Debug and Readbalty

// prismaWithLogs.user.findMany({}).then((res) => {
//   console.log(res);
// });

export  const prisma = new PrismaClient({
  log: [
    {
      emit: "event", // Performed Events for Advance Debugs
      level: "query",
    },
  ],
});
prisma.$on("query", async (e) => {
  console.log(`${e.query} ${e.params}`);
});

// Result
// prisma:info Starting a postgresql pool with 5 connections.
// prisma:query SELECT "public"."User"."id", "public"."User"."email", "public"."User"."name" FROM "public"."User" WHERE 1=1 OFFSET $1
