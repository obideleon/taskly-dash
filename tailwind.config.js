const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        dark: "#455AF7",
        DEFAULT: "#2C71FF",
        light: "#B7E6FF",
        lightest: "#E5F6FF",
      },
      orange: {
        DEFAULT: "#FF562D",
        light: "#FFDAC9",
        lightest: "#FFF0E9",
      },
      purple: {
        DEFAULT: "#604BBA",
        light: "#BCC3FF",
      },
      green: {
        DEFAULT: "#348D50",
      },
      gray: {
        DEFAULT: "#323232",
        light: "#646464",
        lightest: "#969696",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
