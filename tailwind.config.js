/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background": "#15202B",
        'primary': { 
          DEFAULT: '#1DA1F2', 
          50: '#CBE9FC', 
          100: '#B7E1FB', 
          200: '#91D1F9', 
          300: '#6AC1F6', 
          400: '#44B1F4', 
          500: '#1DA1F2', 
          600: '#0C82CB', 
          700: '#096096', 
          800: '#063E61', 
          900: '#031C2C' 
        },
        "card": "#192734",
        "hover": "#22303C",
        "hover": "#22303C",
        "primaryText": "#FFFFFF",
        "secondaryText": "#8899A6",
      },
    },
  },
  plugins: [],
}


/*shades generated from tailwin shades generator*/