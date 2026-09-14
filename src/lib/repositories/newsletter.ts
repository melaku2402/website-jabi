import "server-only";
import { prisma } from "@/lib/prisma";

/** Called from the public NewsletterBanner form. */
export async function subscribeToNewsletter(email: string) {
  return prisma.newsletterSubscriber.upsert({
    where: { email },
    update: { status: "active" },
    create: { email, status: "active" },
  });
}

export async function unsubscribeFromNewsletter(email: string) {
  return prisma.newsletterSubscriber.updateMany({
    where: { email },
    data: { status: "unsubscribed" },
  });
}

export async function getAllSubscribersForAdmin() {
  return prisma.newsletterSubscriber.findMany({ orderBy: { subscribedAt: "desc" } });
}

export async function deleteSubscriber(id: string) {
  return prisma.newsletterSubscriber.delete({ where: { id } });
}
