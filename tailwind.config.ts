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
        accent: "#EC4899",
      },

      fontFamily: {
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },

      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.08)",
        card: "0 10px 30px rgba(17, 24, 39, 0.08)",
      },

      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },

        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },

      animation: {
        "slide-in": "slideIn 0.3s ease-out",
        "fade-in": "fadeIn 0.3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;