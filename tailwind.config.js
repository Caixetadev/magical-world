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
        primary: "#583527",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
