import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    heroui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#171717",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#7D7AE5",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#322F92",
            },
            focus: "#7D7AE5",
          },
        },
        dark: {
          colors: {
            background: "#0A0A0A",
            foreground: "#EDEDED",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#7D7AE5",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#322F92",
            },
            focus: "#7D7AE5",
          },
        },
        custom: {
          extend: "light",
          colors: {
            primary: {
              DEFAULT: "#7D7AE5",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#322F92",
              foreground: "#FFFFFF",
            },
            background: "#FAFFF2",
          },
        },
      },
    }),
  ],
};

export default config;
