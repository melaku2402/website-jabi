import "server-only";
import { prisma } from "@/lib/prisma";
import type { ContentStatus, Testimonial as TestimonialRow } from "@prisma/client";

export interface TestimonialDTO {
  id: string;
  name: string;
  position: string;
  quote: string;
  avatar: string;
  rating: number | null;
}

function toDTO(row: TestimonialRow, locale: string): TestimonialDTO {
  const isAmharic = locale === "am";
  return {
    id: row.id,
    name: row.name,
    position: isAmharic ? row.positionAm : row.positionEn,
    quote: isAmharic ? row.quoteAm : row.quoteEn,
    avatar: row.avatar,
    rating: row.rating,
  };
}

export async function getPublishedTestimonials(locale: string): Promise<TestimonialDTO[]> {
  try {
    const rows = await prisma.testimonial.findMany({
      where: { status: "published" },
      orderBy: { order: "asc" },
    });
    return rows.map((row) => toDTO(row, locale));
  } catch {
    // Database not reachable/migrated yet — caller falls back to static data.
    return [];
  }
}

export async function getAllTestimonialsForAdmin() {
  return prisma.testimonial.findMany({ orderBy: { order: "asc" } });
}

export interface TestimonialInput {
  name: string;
  positionEn: string;
  positionAm: string;
  quoteEn: string;
  quoteAm: string;
  avatar: string;
  rating: number | null;
  status: ContentStatus;
  order: number;
}

export async function createTestimonial(input: TestimonialInput) {
  return prisma.testimonial.create({ data: input });
}

export async function updateTestimonial(id: string, input: TestimonialInput) {
  return prisma.testimonial.update({ where: { id }, data: input });
}

export async function deleteTestimonial(id: string) {
  return prisma.testimonial.delete({ where: { id } });
}
