import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: "#1C2329", // Deep Carbon Rolled Steel
          "charcoal-medium": "#263038", // Heavy structural gunmetal
          "charcoal-light": "#36434E", // Cold rolled steel
          steel: "#4A5866", // Galvanized plate steel
          zinc: "#8B99A6", // Metallic zinc coating
          
          // New Synergistic Primary Accent: Forge Crimson / Iron Red (#D92525)
          red: "#D92525", 
          "red-hover": "#B91C1C",
          "red-light": "#EF4444",
          
          // Alias orange tokens to Forge Red so existing classes automatically adapt
          orange: "#D92525", 
          "orange-hover": "#B91C1C",
          "orange-light": "#EF4444",
          
          primary: "#D92525",
          "primary-hover": "#B91C1C",
          
          blue: "#1F597A", // Structural Steel Blue
          navy: "#102C42", // Industrial Navy
          green: "#1B7354", // Industrial verification green
          "green-dark": "#165941",
          yellow: "#FFB703", // Industrial Caution Yellow
          bg: "#EEF1F4", // Industrial concrete/steel workshop light gray
          "bg-plate": "#E3E7EB", // Heavy sheet metal backing
          border: "#BEC8D1", // Industrial rivet & seam border
          "border-dark": "#526270", // Heavy steel girder border
          muted: "#667785",
        },
      },
      fontFamily: {
        sans: [
          'Gotham',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        serif: [
          'Elizeth',
          'Georgia',
          '"Times New Roman"',
          'serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      maxWidth: {
        'site': '1240px',
      },
      backgroundImage: {
        'steel-gradient': 'linear-gradient(135deg, #2D3740 0%, #1C2329 100%)',
        'plate-gradient': 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
