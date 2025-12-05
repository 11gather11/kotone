export const I18N = {
	lang: 'ja',
	dir: 'ltr'
} as const

export const SITE = {
	title: 'kotone',
	description: 'A simple, fast, and customizable static site generator.',
	defaultLanguage: 'ja'
} as const

export const NAVIGATION = [
	{ name: 'Home', href: '/', external: false },
	{ name: 'archive', href: '/archive', external: false },
	{ name: 'About', href: '/about', external: false },
	{ name: 'GitHub', href: 'https://github.com/11gather11', external: true }
] as const
