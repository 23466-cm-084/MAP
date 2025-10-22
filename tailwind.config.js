/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["*.html"],
      theme: {
        extend: {
          screens: {
            'xs': '375px', // Custom breakpoint for 375px
            'sx': '430px', // Custom breakpoint for 430px
            // You can keep or modify the default breakpoints if needed
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
          },
        },
      },
  plugins: [],
}

