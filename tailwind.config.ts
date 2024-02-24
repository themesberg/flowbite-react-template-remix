import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
} satisfies Config;
