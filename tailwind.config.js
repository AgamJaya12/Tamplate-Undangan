import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            "background": {
              "DEFAULT": "#FFFCF8"
            },
            "content1": {
              "DEFAULT": "#FFFFFF",
              "foreground": "#5D534A"
            },
            "content2": {
              "DEFAULT": "#f9f5f0",
              "foreground": "#5D534A"
            },
            "content3": {
              "DEFAULT": "#f3ece3",
              "foreground": "#5D534A"
            },
            "content4": {
              "DEFAULT": "#ede4d9",
              "foreground": "#5D534A"
            },
            "divider": {
              "DEFAULT": "rgba(93, 83, 74, 0.15)"
            },
            "focus": {
              "DEFAULT": "#C8A27A"
            },
            "foreground": {
              "50": "#faf8f6",
              "100": "#f5f0eb",
              "200": "#ebe1d7",
              "300": "#e0d2c3",
              "400": "#c6b4a0",
              "500": "#ab967d",
              "600": "#8d7a65",
              "700": "#6f604f",
              "800": "#5D534A",
              "900": "#2e2924",
              "DEFAULT": "#5D534A"
            },
            "overlay": {
              "DEFAULT": "#000000"
            },
            "danger": {
              "50": "#fee7ef",
              "100": "#fdd0df",
              "200": "#faa0bf",
              "300": "#f871a0",
              "400": "#f54180",
              "500": "#f31260",
              "600": "#c20e4d",
              "700": "#920b3a",
              "800": "#610726",
              "900": "#310413",
              "DEFAULT": "#f31260",
              "foreground": "#ffffff"
            },
            "default": {
              "50": "#faf8f6",
              "100": "#f5f0eb",
              "200": "#ebe1d7",
              "300": "#e0d2c3",
              "400": "#c6b4a0",
              "500": "#ab967d",
              "600": "#8d7a65",
              "700": "#6f604f",
              "800": "#5D534A",
              "900": "#2e2924",
              "DEFAULT": "#e0d2c3",
              "foreground": "#5D534A"
            },
            "primary": {
              "50": "#f9f5ed",
              "100": "#f3ebdb",
              "200": "#e7d7b7",
              "300": "#dbc393",
              "400": "#d0af6f",
              "500": "#C8A27A",
              "600": "#a08262",
              "700": "#786149",
              "800": "#504131",
              "900": "#282018",
              "DEFAULT": "#C8A27A",
              "foreground": "#fff"
            },
            "secondary": {
              "50": "#f2eafa",
              "100": "#e4d4f4",
              "200": "#c9a9e9",
              "300": "#ae7ede",
              "400": "#9353d3",
              "500": "#7828c8",
              "600": "#6020a0",
              "700": "#481878",
              "800": "#301050",
              "900": "#180828",
              "DEFAULT": "#7828c8",
              "foreground": "#fff"
            },
            "success": {
              "50": "#e8faf0",
              "100": "#d1f4e0",
              "200": "#a2e9c1",
              "300": "#74dfa2",
              "400": "#45d483",
              "500": "#17c964",
              "600": "#12a150",
              "700": "#0e793c",
              "800": "#095028",
              "900": "#052814",
              "DEFAULT": "#17c964",
              "foreground": "#000"
            },
            "warning": {
              "50": "#fefce8",
              "100": "#fdedd3",
              "200": "#fbdba7",
              "300": "#f9c97c",
              "400": "#f7b750",
              "500": "#f5a524",
              "600": "#c4841d",
              "700": "#936316",
              "800": "#62420e",
              "900": "#312107",
              "DEFAULT": "#f5a524",
              "foreground": "#000"
            }
          }
        },
        dark: {
          colors: {
            "background": {
              "DEFAULT": "#1A1714"
            },
            "content1": {
              "DEFAULT": "#2A2520",
              "foreground": "#E8E0D7"
            },
            "content2": {
              "DEFAULT": "#352F29",
              "foreground": "#E8E0D7"
            },
            "content3": {
              "DEFAULT": "#403932",
              "foreground": "#E8E0D7"
            },
            "content4": {
              "DEFAULT": "#4B433B",
              "foreground": "#E8E0D7"
            },
            "divider": {
              "DEFAULT": "rgba(232, 224, 215, 0.15)"
            },
            "focus": {
              "DEFAULT": "#C8A27A"
            },
            "foreground": {
              "50": "#2e2924",
              "100": "#5D534A",
              "200": "#6f604f",
              "300": "#8d7a65",
              "400": "#ab967d",
              "500": "#c6b4a0",
              "600": "#e0d2c3",
              "700": "#ebe1d7",
              "800": "#f5f0eb",
              "900": "#faf8f6",
              "DEFAULT": "#E8E0D7"
            },
            "overlay": {
              "DEFAULT": "#000000"
            },
            "danger": {
              "50": "#310413",
              "100": "#610726",
              "200": "#920b3a",
              "300": "#c20e4d",
              "400": "#f31260",
              "500": "#f54180",
              "600": "#f871a0",
              "700": "#faa0bf",
              "800": "#fdd0df",
              "900": "#fee7ef",
              "DEFAULT": "#f31260",
              "foreground": "#ffffff"
            },
            "default": {
              "50": "#2e2924",
              "100": "#5D534A",
              "200": "#6f604f",
              "300": "#8d7a65",
              "400": "#ab967d",
              "500": "#c6b4a0",
              "600": "#e0d2c3",
              "700": "#ebe1d7",
              "800": "#f5f0eb",
              "900": "#faf8f6",
              "DEFAULT": "#6f604f",
              "foreground": "#fff"
            },
            "primary": {
              "50": "#282018",
              "100": "#504131",
              "200": "#786149",
              "300": "#a08262",
              "400": "#C8A27A",
              "500": "#d0af6f",
              "600": "#dbc393",
              "700": "#e7d7b7",
              "800": "#f3ebdb",
              "900": "#f9f5ed",
              "DEFAULT": "#C8A27A",
              "foreground": "#000"
            },
            "secondary": {
              "50": "#180828",
              "100": "#301050",
              "200": "#481878",
              "300": "#6020a0",
              "400": "#7828c8",
              "500": "#9353d3",
              "600": "#ae7ede",
              "700": "#c9a9e9",
              "800": "#e4d4f4",
              "900": "#f2eafa",
              "DEFAULT": "#9353d3",
              "foreground": "#fff"
            },
            "success": {
              "50": "#052814",
              "100": "#095028",
              "200": "#0e793c",
              "300": "#12a150",
              "400": "#17c964",
              "500": "#45d483",
              "600": "#74dfa2",
              "700": "#a2e9c1",
              "800": "#d1f4e0",
              "900": "#e8faf0",
              "DEFAULT": "#17c964",
              "foreground": "#000"
            },
            "warning": {
              "50": "#312107",
              "100": "#62420e",
              "200": "#936316",
              "300": "#c4841d",
              "400": "#f5a524",
              "500": "#f7b750",
              "600": "#f9c97c",
              "700": "#fbdba7",
              "800": "#fdedd3",
              "900": "#fefce8",
              "DEFAULT": "#f5a524",
              "foreground": "#000"
            }
          }
        }
      }
    })
  ]
}
