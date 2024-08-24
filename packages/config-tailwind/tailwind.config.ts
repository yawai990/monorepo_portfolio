import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "prefix" | "presets" | "content"> = {
  content: "*",
  theme: {
    extend: {
      backgroundColor: {
        primary: "#d3f4d3",
        secondary: "#82dd00",
      },
      fontFamily: {
        header: ["var(--font-header)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;
