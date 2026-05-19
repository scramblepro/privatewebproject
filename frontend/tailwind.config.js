/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        section: "var(--space-section)",
        "section-lg": "var(--space-section-lg)",
      },
      maxWidth: {
        container: "80rem",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
