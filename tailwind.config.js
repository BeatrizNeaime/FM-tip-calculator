/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "strong-cyan": "hsl(172, 67%, 45%)",
        "dark-cyan": "hsl(183, 100%, 15%)",
        "grayish-cyan": "hsl(184, 14%, 56%)",
        "light-grayish-cyan": "hsl(185, 41%, 84%)",
        "light-cyan": "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)" 
      },
      fontFamily: {
        space: ["Space Mono", "monospace"]
      }
    },
    screens:{
      mb: "375px", /* mobile */
      md: "768px", /* tablets */
      dt: "1010px", /* desktop */
    }
  },
  plugins: [],
}
