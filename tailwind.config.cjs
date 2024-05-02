/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        extend: {
            fontFamily: {
                'caption':['"kepler-std-caption"', 'serif'],
                'body':['"kepler-std"', 'serif'],
                'display':['"kepler-std-display"', 'serif'],
                'subheader':['"kepler-std-subhead"', 'serif'],
                'hero':['"DansestudietDisplay1"', 'sans-serif'],
                'knap':['"Dansestudiet Simple', 'sans-serif'],
                },
            colors: {
                'grey': {
                    50:"#EFEEEC",
                    100: "#DEDCD8",
                    200: "#BBB7AF",
                    300: "#9B9488",
                    400: "#746E62",
                    500: "#4D4941",
                    600: "#3D3A33",
                    700: "#2F2D28",
                    800: "#1E1D1A",
                    900: "#11100E",
                  },
                  'blue': {
                    50:"#E2F5F9",
                    100: "#C0EAF1",
                    200: "#86D6E4",
                    300: "#47C1D7",
                    400: "#279BB0",
                    500: "#196572",
                    600: "#14515C",
                    700: "#0F3B43",
                    800: "#0A292E",
                    900: "#051215",
                  },
                  'red': {
                    50:"#FFE5EA",
                    100: "#FFCCD5",
                    200: "#FF9EAE",
                    300: "#FF6B84",
                    400: "#FF3859",
                    500: "#FF0933",
                    600: "#D10023",
                    700: "#9E001A",
                    800: "#6B0012",
                    900: "#330009",
                  },
                  'white': {
                    100: "#ffffff",
                  },
                  'black': {
                    100: "#0A0A0A",
                  },
                  'beige': {
                    500: "#FCF3E8",
                  },
            }
        }
    },
  };