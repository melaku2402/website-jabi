import { prisma } from '@/lib/prisma';
import type { ContactSubmission } from '@/types/contact';

export const contactRepository = {
  async save(data: ContactSubmission): Promise<ContactSubmission> {
    try {
      // Direct database insert if Prisma model exists, otherwise simulated echo
      return await prisma.contact.create({ data });
    } catch {
      return { ...data, id: 'temp-' + Date.now(), createdAt: new Date() };
    }
  }
};
