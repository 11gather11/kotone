import { getCollection } from 'astro:content'

const getRawSortedPosts = async () => {
	const allPosts = await getCollection('posts', ({ data }) => {
		return import.meta.env.DEV || !data.draft
	})

	return allPosts.sort((a, b) => {
		return b.data.published.getTime() - a.data.published.getTime()
	})
}

export const getSortedPosts = async () => {
	const posts = await getRawSortedPosts()
	return posts
}
