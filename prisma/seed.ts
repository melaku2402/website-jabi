import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

/**
 * Bootstraps the first admin account so there's a way to log in at all —
 * there's no public sign-up flow for the admin panel by design. Change the
 * password immediately after first login in a real deployment; better yet,
 * override SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD via the environment
 * before running this in anything beyond local development.
 */
async function main() {
  const email = process.env.SEED_ADMIN_EMAIL ?? "admin@gmail.com";
  const password = process.env.SEED_ADMIN_PASSWORD ?? "Admin@123";
  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.adminUser.upsert({
    where: { email },
    update: {},
    create: {
      name: "Admin User",
      email,
      passwordHash,
      role: "super_admin",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop&crop=faces",
      status: "active",
    },
  });

  console.log(`Seeded admin user: ${user.email} (id: ${user.id})`);
  if (!process.env.SEED_ADMIN_PASSWORD) {
    console.log(`Default password is "${password}" — change it after first login.`);
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
