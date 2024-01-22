/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    extend: {
      fontFamily: {
        banger: [`var(--font-Banger)`, "sans-serif"],
        quicksand: [`var(--font-QuickSand)`, "sans-serif"],
        robotoCondensed: [`var(--font-RobotoCondensed)`, "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
