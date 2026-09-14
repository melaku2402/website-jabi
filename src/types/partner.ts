import type { ContentStatus } from "./admin";

export interface Partner {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  status: ContentStatus;
}
