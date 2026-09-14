import "server-only";
import { prisma } from "@/lib/prisma";
import type { WebsiteSettings } from "@/data/admin/settings";
import { websiteSettingsData } from "@/data/admin/settings";

const SETTINGS_ID = "singleton";

/** Falls back to the shipped defaults if no row has been saved yet. */
export async function getSiteSettings(): Promise<WebsiteSettings> {
  const row = await prisma.siteSettings.findUnique({ where: { id: SETTINGS_ID } });
  return (row?.data as unknown as WebsiteSettings) ?? websiteSettingsData;
}

export async function saveSiteSettings(data: WebsiteSettings): Promise<void> {
  await prisma.siteSettings.upsert({
    where: { id: SETTINGS_ID },
    update: { data: data as object },
    create: { id: SETTINGS_ID, data: data as object },
  });
}
