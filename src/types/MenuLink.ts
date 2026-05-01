import type { MenuItem, Sortable } from ".";

export type MenuLink = MenuItem &
  Sortable & {
    href: string;
  };
