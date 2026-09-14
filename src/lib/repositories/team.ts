import "server-only";
import { prisma } from "@/lib/prisma";
import type { ContentStatus, TeamMember as TeamMemberRow } from "@prisma/client";

export interface TeamMemberDTO {
  id: string;
  name: string;
  position: string;
  department: string;
  photo: string;
  order: number;
}

function toDTO(row: TeamMemberRow, locale: string): TeamMemberDTO {
  const isAmharic = locale === "am";
  return {
    id: row.id,
    name: row.name,
    position: isAmharic ? row.positionAm : row.positionEn,
    department: isAmharic ? row.departmentAm : row.departmentEn,
    photo: row.photo,
    order: row.order,
  };
}

export async function getPublishedTeam(locale: string): Promise<TeamMemberDTO[]> {
  try {
    const rows = await prisma.teamMember.findMany({
      where: { status: "published" },
      orderBy: { order: "asc" },
    });
    return rows.map((row) => toDTO(row, locale));
  } catch {
    return [];
  }

}

export async function getAllTeamForAdmin() {
  return prisma.teamMember.findMany({ orderBy: { order: "asc" } });
}

export interface TeamMemberInput {
  name: string;
  positionEn: string;
  positionAm: string;
  departmentEn: string;
  departmentAm: string;
  photo: string;
  order: number;
  status: ContentStatus;
}

export async function createTeamMember(input: TeamMemberInput) {
  return prisma.teamMember.create({ data: input });
}

export async function updateTeamMember(id: string, input: TeamMemberInput) {
  return prisma.teamMember.update({ where: { id }, data: input });
}

export async function deleteTeamMember(id: string) {
  return prisma.teamMember.delete({ where: { id } });
}
