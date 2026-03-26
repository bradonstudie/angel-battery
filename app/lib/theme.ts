export const pageThemes = {
  default: "#ffffff",
  red: "#dc4d16",
  blue: "#577db5",
  green: "#689a4c",
  yellow: "#d3b32d",
} as const;

export type PageTheme = keyof typeof pageThemes;
