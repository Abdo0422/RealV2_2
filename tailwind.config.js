const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    
    themes: [
        {
          mytheme: {
          
 "primary": "#661AE6",
          
 "secondary": "#D926AA",
          
 "accent": "#1FB2A5",
          
 "neutral": "#191D24",
          
 "base-100": "#2A303C",
          
 "info": "#3ABFF8",
          
 "success": "#36D399",
          
 "warning": "#FBBD23",
          
 "error": "#F87272",
          },
        },
      ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                'quicksand': ['Quicksand', 'sans-serif'],
            },
        },
    },

   plugins: [require("daisyui")],
   daisyui: {
    themes: ["light"],
  },
};
