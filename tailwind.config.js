/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        basic: {
          primary: "#581c87",
          secondary: "#7e22ce",
          accent: "#701a75",
          neutral: "#1A252B",
          "base-100": "#111B21",
          info: "#0ea5e9",
          success: "#22c55e",
          warning: "#fde047",
          error: "#ef4444",
        },
      },
    ],
  },
};
