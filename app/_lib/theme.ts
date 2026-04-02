export const pageThemes = {
  default: "#f9f9f9",
  black: "#252525",
  red: "#de5c29",
  blue: "#4680d6",
  green: "#689a4c",
  yellow: "#ffffc7",
} as const;

export type PageTheme = keyof typeof pageThemes;
