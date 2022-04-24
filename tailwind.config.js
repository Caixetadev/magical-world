module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Magic_Spell", "cursive"],
        body: ["Quattrocento", "serif"],
        headingAlt: ["MedievalSharp", "cursive"],
        sansOne: ["Inter", "sans-serif"],
        sansTwo: ["Sora", "sans-serif"],
      },
      colors: {
        altGreen: "#50C878",
        altSilver: "#C0C0C0",
        themeGreen1: "#1A472A",
        themeGreen2: "#2A623D",
        themeSilver1: "#5D5D5D",
        themeSilver2: "#AAAAAA",
        dark: "",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    // ...
  ],
};
