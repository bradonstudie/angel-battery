export const pageThemes = {
  default: "#ffffff",
  black: "#0e0e0e",
  red: "#de5c29",
  blue: "#4680d6",
  green: "#689a4c",
  yellow: "#d4bc5b",
} as const;

export type PageTheme = keyof typeof pageThemes;
