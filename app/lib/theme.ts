export const pageThemes = {
  default: "#ffffff",
  black: "#0e0e0e",
  red: "#de5c29",
  blue: "#6084ba",
  green: "#689a4c",
  yellow: "#d4bc5b",
} as const;

export type PageTheme = keyof typeof pageThemes;
