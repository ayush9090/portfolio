// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // ... your theme configuration
  },
  plugins: [
    // ... your other plugins
    require("@tailwindcss/forms"),
  ],
};
