/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        info: {
          default: "#3467eb",
          hover: "#1442b8",
        },
        warning: "#ebcc34",
        success: "#34eb6e",
        error: "#eb3a34",
        "border-brown": "#a3a2ab",
        button: {
          default: "#0d6efd",
          hover: "#0859d1",
        },
      },
      fontSize: {
        size: {
          30: "2rem",
          14: "1rem",
          25: "1.5rem",
        },
      },
    },
  },
  plugins: [],
};
