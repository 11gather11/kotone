import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import eslintAstro from 'eslint-plugin-astro'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
	{
		ignores: ['dist/**', 'node_modules/**', '.astro/**']
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser }
	},
	tseslint.configs.recommended,
	eslintAstro.configs.recommended,
	eslintAstro.configs['jsx-a11y-recommended'],
	{
		plugins: { 'simple-import-sort': simpleImportSort },
		rules: {
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error'
		}
	},
	{
		plugins: {
			'better-tailwindcss': betterTailwindcss
		},
		rules: {
			...betterTailwindcss.configs['recommended-warn'].rules,
			...betterTailwindcss.configs['recommended-error'].rules,
			'better-tailwindcss/enforce-consistent-line-wrapping': ['warn', { printWidth: 120, indent: 'tab' }],
			'better-tailwindcss/no-unregistered-classes': ['error', { detectComponentClasses: true }]
		},
		settings: {
			'better-tailwindcss': {
				entryPoint: './src/styles/global.css'
			}
		}
	}
])
