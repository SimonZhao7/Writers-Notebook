/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'n-red': '#C62D2D',
                'l-red': '#EB2D2D',
                'd-red': '#942626',
                'txt-black': '#2929292',
                'c-gray': '#CBCBCB',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },
            maxHeight: {
              'max': '9999px',
            },
        },
    },
    plugins: [],
}
