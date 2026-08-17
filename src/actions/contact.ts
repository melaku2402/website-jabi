'use server';

import { contactService } from '@/services/contactService';
import { z } from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(9, 'Valid phone number required'),
  subject: z.string().min(2, 'Subject required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export async function submitContactAction(prevState: unknown, formData: FormData) {
  const rawData = Object.fromEntries(formData);
  const parsed = contactSchema.safeParse(rawData);

  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  try {
    await contactService.submitForm(parsed.data);
    return { success: true, message: 'Thank you for reaching out! We will contact you shortly.' };
  } catch (error) {
    return { success: false, serverError: (error as Error).message };
  }
}
