/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/2.jpg')",
      },
      colors: {
        court: {
          DEFAULT: "#4CAF50", // Vert principal
          light: "#81C784", // Vert clair
          dark: "#388E3C", // Vert foncé
          accent: "#A5D6A7", // Accent doux
          text: "#1B5E20", // Texte profond
          bg: "#F1F8E9", // Fond très clair
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
