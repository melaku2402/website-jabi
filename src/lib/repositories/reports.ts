import "server-only";
import { prisma } from "@/lib/prisma";
import type { ContentStatus, Report as ReportRow } from "@prisma/client";

export interface ReportDTO {
  id: string;
  name: string;
  type: string;
  year: string;
  fileUrl: string;
  fileSize: string;
}

function toDTO(row: ReportRow, locale: string): ReportDTO {
  return {
    id: row.id,
    name: locale === "am" ? row.nameAm : row.nameEn,
    type: row.type,
    year: row.year,
    fileUrl: row.fileUrl,
    fileSize: row.fileSize,
  };
}

export async function getPublishedReports(locale: string): Promise<ReportDTO[]> {
  try {
    const rows = await prisma.report.findMany({
      where: { status: "published" },
      orderBy: { uploadedAt: "desc" },
    });
    return rows.map((row) => toDTO(row, locale));
  } catch {
    return [];
  }

}

export async function getAllReportsForAdmin() {
  return prisma.report.findMany({ orderBy: { uploadedAt: "desc" } });
}

export interface ReportInput {
  nameEn: string;
  nameAm: string;
  type: string;
  year: string;
  fileUrl: string;
  fileSize: string;
  status: ContentStatus;
}

export async function createReport(input: ReportInput) {
  return prisma.report.create({ data: input });
}

export async function updateReport(id: string, input: ReportInput) {
  return prisma.report.update({ where: { id }, data: input });
}

export async function deleteReport(id: string) {
  return prisma.report.delete({ where: { id } });
}
