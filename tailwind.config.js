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
        accent: ["Allura", "cursive"],
      },
    },
  },
  plugins: [],
};
