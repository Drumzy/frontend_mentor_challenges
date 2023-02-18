import {defineCollection, z} from 'astro:content'

export const collections = {
    challenge: defineCollection({
        schema: z.object({
            slug: z.string()
        })
    })
}