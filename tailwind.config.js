/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#6A5ACD",
        primaryIndigo: "#4F46E5",
        accentPink: "#EC4899",
        errorRed: "#EF4444",
        darkText: "#1F2937",
        grayText: "#6B7280",
        sidebarBg: "#F9FAFB",
        cardBg: "#FFFFFF",
        softPink: "#FFC0CB",
        softBlue: "#ADD8E6",
        darkPurple: "#21001E",
        primaryBlue: "#eff3f5",
        royalPurple: "#562576",
        deepNavy: "#232b4a",
      },
      boxShadow: {
        // Kartın hafif gölgesini iyileştirmek için
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
