import type { Metadata } from "next";
import { pageThemes, PageTheme } from "./theme";

export function createPageTheme(theme: PageTheme): {
  metadata: Metadata;
  styleTag: string;
} {
  const bg = pageThemes[theme];

  return {
    metadata: {
      other: {
        theme,
      },
    },
    styleTag: `:root { --page-bg: ${bg}; }`,
  };
}
