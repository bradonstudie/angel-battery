import type { Metadata } from "next";
import { pageThemes, PageTheme } from "./theme";

export function createPageTheme(theme: PageTheme): {
  metadata: Metadata;
  styleTag: string;
} {
  const bg = pageThemes[theme];
  const textColor = bg === "#484848" ? "white" : "black";

  return {
    metadata: {
      other: {
        theme,
      },
    },
    styleTag: `:root { --page-bg: ${bg}; --page-text-color: ${textColor} }`,
  };
}
