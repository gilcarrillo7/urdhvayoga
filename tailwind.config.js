/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      fontFamily: {
        belleza: ["Belleza"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.ico",
      },
    },
  ],
  daisyui: {
    themes: [
      "retro",
      "lemonade",
      "autumn",
      "wireframe",
      "cupcake",
      "garden",
      "pastel",
      "nord",
    ],
  },
};
