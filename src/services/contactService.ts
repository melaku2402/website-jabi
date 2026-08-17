import { contactRepository } from '@/repositories/contactRepository';
import type { ContactSubmission } from '@/types/contact';

export const contactService = {
  async submitForm(data: ContactSubmission) {
    if (!data.fullName || !data.email || !data.message) {
      throw new Error('Required fields are missing.');
    }
    return contactRepository.save(data);
  }
};
