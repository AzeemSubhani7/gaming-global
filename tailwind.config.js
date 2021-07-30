module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#282535",
          DEFAULT: "#1f1d29",
          dark: "#1f1d29",
        },
        secondary: "#D31C3E",
        "greyText": '#B9B7C0',
        "greyPlaceholder": "#827F92",
        "greyLabel": "#B3B1BB",
        "inputBg": "#3A3747",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
