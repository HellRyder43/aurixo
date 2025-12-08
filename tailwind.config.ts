import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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

        // Dark Mode Colors
        'deep-black': '#0a0a0a',
        'carbon': '#111111',
        'slate-text': '#94a3b8',

        // Light Mode Colors
        'snow-white': '#f8fafc',
        'porcelain': '#f1f5f9',
        'cool-gray': '#e2e8f0',
        'charcoal': '#1a1a1a',
        'slate-gray': '#475569',
        'cool-slate': '#64748b',
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
