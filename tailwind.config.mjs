/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		animation: {
		  'fade-in': 'fadeIn 0.5s ease-in',
		  'fade-out': 'fadeOut 0.5s ease-out',
		  'pulse': 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1)'
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' }
		  },
		  fadeOut: {
			'0%': { opacity: '1' },
			'100%': { opacity: '0' }
		  },
		  pulse: {
			'0%, 100%': { opacity: '1' },
			'50%': { opacity: '.5' }
		  }
		}
	  }
	},
	plugins: []
  }