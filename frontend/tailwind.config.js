/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/features/**/*.{js,ts,jsx,tsx}",
      "./src/routes/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        sidebar: "#2b374e",
        navbar: "#2b374e"
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

