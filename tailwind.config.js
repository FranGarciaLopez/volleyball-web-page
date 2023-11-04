import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "sky-blue": {
          colors: {
            background: "#B3E0FF",
            foreground: "#333333",
            primary: {
              50: "#B3E0FF",
              100: "#80C3FF",
              200: "#4DA6FF",
              300: "#1A89FF",
              400: "#0072E6",
              500: "#005ABD",
              600: "#00439B",
              700: "#002D73",
              800: "#00174A",
              900: "#000822",
              DEFAULT: "#0072E6",
              foreground: "#ffffff",
            },
            secondary: {
              50: "#F7F5F3",
              100: "#F1EAE1",
              200: "#EBE0D0",
              300: "#E5D5BF", // Sand color
              400: "#DFCBAE",
              500: "#D9C09D",
              600: "#C3A48C",
              700: "#AD887B",
              800: "#976C6A",
              900: "#815059",
              DEFAULT: "#D9C09D",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }
    )
  ],
}
