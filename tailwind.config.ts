import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,scss}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        muted: "#6B7280",
        surface: "#F8FAFC",
        night: "#050816",
        primary: "#7C3AED",
        accent: "#EC4899"
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.08)",
        card: "0 10px 30px rgba(17, 24, 39, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
