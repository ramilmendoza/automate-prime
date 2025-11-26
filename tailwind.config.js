/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.tsx",
    "./components/**/*.tsx",
    "./services/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        "prime-dark": "#0A0A0A",
        "prime-light": "#00A8E8",
        "prime-accent": "#D7263D",
        "prime-blue": "#007EA7",
      },
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        tech: ["Rajdhani", "sans-serif"],
        body: ["Rajdhani", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        blink: {
          "50%": { opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.2",
            transform: "scale(0.95)",
            boxShadow: "0 0 0 0 rgba(215, 38, 61, 0.7)",
          },
          "70%": {
            opacity: "0.3",
            transform: "scale(1)",
            boxShadow: "0 0 10px 10px rgba(215, 38, 61, 0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        blink: "blink 1s step-end infinite",
        "pulse-glow": "pulse-glow 4s infinite ease-in-out",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "2rem 2rem",
      },
    },
  },
  plugins: [],
};
