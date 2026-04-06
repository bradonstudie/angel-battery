export const pageThemes = {
  default: "#ffffff",
  black: "#484848",
  red: "#de5c29",
  blue: "#b1c9ee",
  green: "#689a4c",
  yellow: "#ffffc7",
} as const;

export type PageTheme = keyof typeof pageThemes;
