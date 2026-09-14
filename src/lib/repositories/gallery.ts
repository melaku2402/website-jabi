import "server-only";
import { prisma } from "@/lib/prisma";
import type { ContentStatus, GalleryImage as GalleryImageRow } from "@prisma/client";

export interface GalleryImageDTO {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
}

function toDTO(row: GalleryImageRow, locale: string): GalleryImageDTO {
  return {
    id: row.id,
    title: locale === "am" ? row.titleAm : row.titleEn,
    image: row.image,
    category: row.category,
    date: row.date.toISOString(),
  };
}

export async function getPublishedGallery(locale: string): Promise<GalleryImageDTO[]> {
  try {
    const rows = await prisma.galleryImage.findMany({
      where: { status: "published" },
      orderBy: { date: "desc" },
    });
    return rows.map((row) => toDTO(row, locale));
  } catch {
    return [];
  }

}

export async function getAllGalleryForAdmin() {
  return prisma.galleryImage.findMany({ orderBy: { date: "desc" } });
}

export interface GalleryImageInput {
  titleEn: string;
  titleAm: string;
  image: string;
  category: string;
  date: Date;
  status: ContentStatus;
}

export async function createGalleryImage(input: GalleryImageInput) {
  return prisma.galleryImage.create({ data: input });
}

export async function updateGalleryImage(id: string, input: GalleryImageInput) {
  return prisma.galleryImage.update({ where: { id }, data: input });
}

export async function deleteGalleryImage(id: string) {
  return prisma.galleryImage.delete({ where: { id } });
}
