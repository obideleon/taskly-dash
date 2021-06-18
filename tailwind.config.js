const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Open Sans", ...defaultTheme.fontFamily.serif],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        200: "#455AF7",
        DEFAULT: "#2C71FF",
        100: "#B7E6FF",
        50: "#E5F6FF",
      },
      orange: {
        DEFAULT: "#FF562D",
        100: "#FFDAC9",
        50: "#FFF0E9",
      },
      purple: {
        DEFAULT: "#604BBA",
        100: "#BCC3FF",
      },
      green: {
        DEFAULT: "#348D50",
      },
      gray: {
        DEFAULT: "#323232",
        100: "#646464",
        50: "#969696",
      },
      white: {
        DEFAULT: "#fff",
        100: "#F2F2F2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
