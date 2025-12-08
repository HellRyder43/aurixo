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
        // Aurixo Brand Colors
        'brand-indigo': '#6366f1',
        'brand-purple': '#8b5cf6',
        'brand-magenta': '#d946ef',
        'deep-black': '#0a0a0a',
        'carbon': '#111111',
        'slate-text': '#94a3b8',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
