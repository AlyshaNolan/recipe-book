/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'desktop': '768px',
			},
			gridTemplateColumns: {
				// Simple 16 column grid
				'mobile': '16px 1fr 16px',
				'desktop': '1fr repeat(12, calc(min(96px, 8%))) 1fr'
			},
			fontFamily: {
				'heading': ['Dancing Script'],
				'body': ['"Courgette"'],
			},
			gridColumn: {
				'span-content': '2 / -2',
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
