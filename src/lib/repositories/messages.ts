import "server-only";
import { prisma } from "@/lib/prisma";
import type { MessageStatus } from "@prisma/client";

/** Called from the public contact form Server Action (src/actions/contact.ts). */
export async function createContactMessage(input: {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  return prisma.contact.create({ data: input });
}

export async function getAllMessagesForAdmin() {
  return prisma.contact.findMany({ orderBy: { createdAt: "desc" } });
}

export async function updateMessageStatus(id: string, status: MessageStatus) {
  return prisma.contact.update({ where: { id }, data: { status } });
}

export async function deleteMessage(id: string) {
  return prisma.contact.delete({ where: { id } });
}
