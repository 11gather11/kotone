import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

export default defineConfig({
	output: 'static',
	integrations: [icon()],
	vite: {
		plugins: [tailwindcss()]
	}
})
