/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
        script: ["'Great Vibes'", "cursive"],
      },
      colors: {
        background: "#0A0A0A",
        foreground: "#F5F0E8",
        card: { DEFAULT: "#1A1A1A", foreground: "#F5F0E8" },
        popover: { DEFAULT: "#111111", foreground: "#F5F0E8" },
        primary: { DEFAULT: "#C9A96E", foreground: "#0A0A0A" },
        secondary: { DEFAULT: "#1A1A1A", foreground: "#C9A96E" },
        muted: { DEFAULT: "#262626", foreground: "#A3A3A3" },
        accent: { DEFAULT: "#1A1A1A", foreground: "#E8D5A3" },
        destructive: { DEFAULT: "#7F1D1D", foreground: "#F5F0E8" },
        border: "#262626",
        input: "#262626",
        ring: "#C9A96E",
        gold: { primary: "#C9A96E", secondary: "#E8D5A3", muted: "#8C7345" },
        charcoal: "#1A1A1A",
        darkbg: "#0A0A0A",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        fadeInUp: { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        slideDown: { "0%": { opacity: "0", transform: "translateY(-10px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fadeInUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        shimmer: "shimmer 2s linear infinite",
        "slide-down": "slideDown 0.3s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
