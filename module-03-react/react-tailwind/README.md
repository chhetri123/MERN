# Steps

1. npm create vite@latest
   fillout all the answers based on your need

\*\* to install tailwind css

2. npm install -D tailwindcss postcss autoprefixer

3. npx tailwindcss init -p
   ( once this command is executed tailwind.config.js file will be created )

   ``

   /** @type {import('tailwindcss').Config} \*/
   export default {
   content: [
   "./index.html",
   "./src/**/\*.{js,ts,jsx,tsx}",
   ],
   theme: {
   extend: {},
   },
   plugins: [],
   }`
   add this inside tailwind.config.js

   ``

4. inside your index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

``
add these
