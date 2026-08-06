import { prisma } from "../lib/prisma";

async function main() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  // Create a new user with a post
  await prisma.user.create({
    data: {
      name: "Aliceas",
      email: "alice@prisma.io",
      posts: {
        create: {
          title: "Join the Prisma Slack",
        },
      },
    },
  })
  
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