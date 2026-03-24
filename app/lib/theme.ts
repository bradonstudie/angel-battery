export const pageThemes = {
  default: "#ffffff",
  red: "#dc4d16",
  blue: "#6a9ad8",
  green: "#93d48c",
  yellow: "#fef3c7",
} as const;

export type PageTheme = keyof typeof pageThemes;
