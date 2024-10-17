import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // Set your custom background variable to white
        foreground: "#000000", // Optional: Set the foreground text color to black
      },
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1d4ed8",
          secondary: "#64748b",
          accent: "#22d3ee",
          neutral: "#3d4451",
          "base-100": "#ffffff", // Background color for the theme set to white
        },
      },
      "light", // Use the light theme as default
    ],
  },
};

export default config;
