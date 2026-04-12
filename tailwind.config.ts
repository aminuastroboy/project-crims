import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F1A',
        panel: '#111827',
        panel2: '#161F32',
        line: '#243146',
        soft: '#94A3B8',
        brand: '#2563EB',
        danger: '#DC2626',
        warning: '#F59E0B',
        success: '#16A34A'
      },
      boxShadow: {
        panel: '0 10px 30px rgba(0,0,0,0.25)'
      }
    }
  },
  plugins: []
};

export default config;
