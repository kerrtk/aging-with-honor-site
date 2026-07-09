import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Pine & Clay Brand Palette ───────────────────────────────
      colors: {
        // Pine — deep forest green (evolved from teal)
        teal: {
          DEFAULT: "#256A5C",
          light:   "#317D6E",
          dark:    "#1A4D43",
        },
        // Clay — warm earthy tone (evolved from terracotta)
        terracotta: {
          DEFAULT: "#BA6444",
          light:   "#CC7A5A",
          dark:    "#9A4E32",
        },
        // Linen — warm sandy background (evolved from cream)
        cream: {
          DEFAULT: "#EAD5C2",
          dark:    "#DECAB8",
        },
        // Charcoal — unchanged
        charcoal: {
          DEFAULT: "#2D2B29",
          light:   "#4A4744",
        },

        // ─── shadcn/ui system tokens ─────────────────────────────
        border:     "hsl(var(--border))",
        input:      "hsl(var(--input))",
        ring:       "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      // ─── Typography ──────────────────────────────────────────────
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        lato:     ["var(--font-lato)", "system-ui", "sans-serif"],
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
