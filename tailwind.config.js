// tailwind.config.js
module.exports = {
    content: [
      './resources/**/*.{js,ts,jsx,tsx,html}',
      './app/**/*.{js,ts,jsx,tsx}',  // Ensure Tailwind scans this directory
      './pages/**/*.{js,ts,jsx,tsx}', 
      './components/**/*.{js,ts,jsx,tsx}', // If you have a components folder
    ],
    theme: {
      extend: {
        colors: {
          background: '#f0f0f0', // Replace this with your desired color value
          foreground: '#333333',  // Example foreground color
        },
      },
    },
    plugins: [],
  }
  