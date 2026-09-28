export type ThemeMode = "navy" | "cosmic";

export interface ThemeConfig {
  readonly id: ThemeMode;
  readonly label: string;
  readonly primaryColor: string;
  readonly accentColor: string;
  readonly bgDark: string;
  readonly description: string;
}

export const THEME_CONFIGS: Record<ThemeMode, ThemeConfig> = {
  navy: {
    id: "navy",
    label: "Institutional Gold",
    primaryColor: "#0A1128",
    accentColor: "#D4AF37",
    bgDark: "#0A1128",
    description: "Deep Midnight Navy & Brushed Gold Wall Street Theme",
  },
  cosmic: {
    id: "cosmic",
    label: "Cosmic Launchpad",
    primaryColor: "#090217",
    accentColor: "#D946EF",
    bgDark: "#090217",
    description: "Deep Cosmic Obsidian & Electric Fuchsia Theme",
  },
};
