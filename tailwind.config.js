/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
		extend: {
      fontFamily: {
				sans: ['var(--gotham)', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				black: {
            DEFAULT: '#111820',
            '50': '#f0f3f5',
            '100': '#dce5e8',
            '200': '#afbfc7',
            '300': '#869aa6',
            '400': '#435563',
            '500': '#111820',
            '600': '#0f161f',
            '700': '#0a101a',
            '800': '#070c14',
            '900': '#04080f',
            '950': '#02040a'
        },
				primary: {
					DEFAULT: '#008759',
					50: '#f2f9f7',
					100: '#e6f3ee',
					200: '#bfe1d6',
					300: '#99cfbd',
					400: '#4dab8b',
					500: '#008759',
					600: '#007a50',
					700: '#006543',
					800: '#005135',
					900: '#00422c',
				},
			},
		},
	},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries')
  ],
}
