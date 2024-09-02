/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'space-mono': ['"Space Mono"', 'monospace']
			},
			keyframes: {
				'custom-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-25%)' },
				},
			},
			animation: {
				'bounce-custom': 'custom-bounce 1s ease-in-out 1 forwards',
			},
		},
	},
	plugins: [],
}
