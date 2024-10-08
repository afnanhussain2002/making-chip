import type { Config } from "tailwindcss";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customRed: "#6C0605",
        customRed2: "#BC1216" // Add your custom color here
      },
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ["synthwave"],
  },
  
};
export default config;
