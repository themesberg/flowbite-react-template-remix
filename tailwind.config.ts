import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
