import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import eslintAstro from 'eslint-plugin-astro'

export default defineConfig([
	{
		ignores: ['dist/**', 'node_modules/**', 'build/**']
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser }
	},
	tseslint.configs.recommended,
	eslintAstro.configs.recommended,
	eslintAstro.configs['jsx-a11y-recommended']
])
