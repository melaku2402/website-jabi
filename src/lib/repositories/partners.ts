import "server-only";
import { prisma } from "@/lib/prisma";
import type { ContentStatus, Partner as PartnerRow } from "@prisma/client";

export interface PartnerDTO {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
}

function toDTO(row: PartnerRow, locale: string): PartnerDTO {
  return {
    id: row.id,
    name: row.name,
    description: locale === "am" ? row.descriptionAm : row.descriptionEn,
    logo: row.logo,
    website: row.website,
  };
}

export async function getPublishedPartners(locale: string): Promise<PartnerDTO[]> {
  try {
    const rows = await prisma.partner.findMany({
      where: { status: "published" },
      orderBy: { order: "asc" },
    });
    return rows.map((row) => toDTO(row, locale));
  } catch {
    return [];
  }

}

export async function getAllPartnersForAdmin() {
  return prisma.partner.findMany({ orderBy: { order: "asc" } });
}

export interface PartnerInput {
  name: string;
  descriptionEn: string;
  descriptionAm: string;
  logo: string;
  website: string;
  status: ContentStatus;
  order: number;
}

export async function createPartner(input: PartnerInput) {
  return prisma.partner.create({ data: input });
}

export async function updatePartner(id: string, input: PartnerInput) {
  return prisma.partner.update({ where: { id }, data: input });
}

export async function deletePartner(id: string) {
  return prisma.partner.delete({ where: { id } });
}
