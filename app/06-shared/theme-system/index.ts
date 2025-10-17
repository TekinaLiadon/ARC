export interface Theme {
  label: string;
  classes: String[];
}

export const themes = {
  arcaneDark: {
    label: "ARCane dark",
    classes: ["arcane", "dark"],
  },
  arcaneLight: {
    label: "ARCane light",
    classes: ["arcane", "light"],
  },
} as const satisfies Record<string, Theme>;

export type ThemeKey = keyof typeof themes;

export const fallbackThemeKey: ThemeKey = "arcaneDark";
