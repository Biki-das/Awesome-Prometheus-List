/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "JetBrains-Mono": ["JetBrains Mono", "monospace"],
      },
      colors: {
        "xl-medium": "#475569",
        "xl-light": "#94A3B8",
        "xs-medium": "#64748B",
        "xs-semi-bold": "#475569",
        "slate-50": "#F8FAFC",
        "yaml-key": "rgba(34, 134, 58, 1)",
        "yaml-value": "rgba(3, 47, 98, 1)",
      },
      borderColor: {
        "base-white": "#E2E8F0",
        "slate-100": "#F1F5F9",
      },
      keyframes: {
        spin: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0.15" },
        },
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
