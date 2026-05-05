import type { Sortable, PROJECT_ID } from "@/types";

export type DirectoryItem = Sortable & {
  name: string;
  projectTitle: string;
  href: PROJECT_ID;
};
