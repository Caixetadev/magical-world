module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Quattrocento", "serif"],
        heading: ["Quattrocento Sans", "sans-serif"],
        primary: ["Magic_Spell", "cursive"],
        headingAlt: ["MedievalSharp", "cursive"],
        accent: ["Allura", "cursive"],
      },
      color: {
        primary: "#583527",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
