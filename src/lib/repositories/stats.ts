import "server-only";
import { prisma } from "@/lib/prisma";
import type { OrgStat as OrgStatRow, ImpactMetric as ImpactMetricRow } from "@prisma/client";

export interface OrgStatDTO {
  id: string;
  key: string;
  label: string;
  value: string;
  suffix: string | null;
}

export interface ImpactMetricDTO {
  id: string;
  key: string;
  label: string;
  value: string;
  description: string;
}

function statToDTO(row: OrgStatRow, locale: string): OrgStatDTO {
  return {
    id: row.id,
    key: row.key,
    label: locale === "am" ? row.labelAm : row.labelEn,
    value: row.value,
    suffix: row.suffix,
  };
}

function metricToDTO(row: ImpactMetricRow, locale: string): ImpactMetricDTO {
  const isAmharic = locale === "am";
  return {
    id: row.id,
    key: row.key,
    label: isAmharic ? row.labelAm : row.labelEn,
    value: row.value,
    description: isAmharic ? row.descriptionAm : row.descriptionEn,
  };
}

export async function getOrgStats(locale: string): Promise<OrgStatDTO[]> {
  try {
    const rows = await prisma.orgStat.findMany({ orderBy: { order: "asc" } });
    return rows.map((row) => statToDTO(row, locale));
  } catch {
    return [];
  }

}

export async function getImpactMetrics(locale: string): Promise<ImpactMetricDTO[]> {
  try {
    const rows = await prisma.impactMetric.findMany({ orderBy: { order: "asc" } });
    return rows.map((row) => metricToDTO(row, locale));
  } catch {
    return [];
  }

}

export async function getAllOrgStatsForAdmin() {
  return prisma.orgStat.findMany({ orderBy: { order: "asc" } });
}

export async function getAllImpactMetricsForAdmin() {
  return prisma.impactMetric.findMany({ orderBy: { order: "asc" } });
}

export interface OrgStatInput {
  key: string;
  labelEn: string;
  labelAm: string;
  value: string;
  suffix: string | null;
  order: number;
}

export interface ImpactMetricInput {
  key: string;
  labelEn: string;
  labelAm: string;
  value: string;
  descriptionEn: string;
  descriptionAm: string;
  order: number;
}

export async function upsertOrgStat(id: string | null, input: OrgStatInput) {
  return id
    ? prisma.orgStat.update({ where: { id }, data: input })
    : prisma.orgStat.create({ data: input });
}

export async function deleteOrgStat(id: string) {
  return prisma.orgStat.delete({ where: { id } });
}

export async function upsertImpactMetric(id: string | null, input: ImpactMetricInput) {
  return id
    ? prisma.impactMetric.update({ where: { id }, data: input })
    : prisma.impactMetric.create({ data: input });
}

export async function deleteImpactMetric(id: string) {
  return prisma.impactMetric.delete({ where: { id } });
}
