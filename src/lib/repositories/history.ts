import "server-only";
import { prisma } from "@/lib/prisma";
import type { HistoryMilestone as HistoryMilestoneRow } from "@prisma/client";

export interface HistoryMilestoneDTO {
  id: string;
  key: string;
  year: string;
  title: string;
  description: string;
}

function toDTO(row: HistoryMilestoneRow, locale: string): HistoryMilestoneDTO {
  const isAmharic = locale === "am";
  return {
    id: row.id,
    key: row.key,
    year: row.year,
    title: isAmharic ? row.titleAm : row.titleEn,
    description: isAmharic ? row.descriptionAm : row.descriptionEn,
  };
}

export async function getHistoryTimeline(locale: string): Promise<HistoryMilestoneDTO[]> {
  try {
    const rows = await prisma.historyMilestone.findMany({ orderBy: { order: "asc" } });
    return rows.map((row) => toDTO(row, locale));
  } catch {
    return [];
  }

}

export async function getAllHistoryForAdmin() {
  return prisma.historyMilestone.findMany({ orderBy: { order: "asc" } });
}

export interface HistoryMilestoneInput {
  key: string;
  year: string;
  titleEn: string;
  titleAm: string;
  descriptionEn: string;
  descriptionAm: string;
  order: number;
}

export async function upsertHistoryMilestone(id: string | null, input: HistoryMilestoneInput) {
  return id
    ? prisma.historyMilestone.update({ where: { id }, data: input })
    : prisma.historyMilestone.create({ data: input });
}

export async function deleteHistoryMilestone(id: string) {
  return prisma.historyMilestone.delete({ where: { id } });
}
