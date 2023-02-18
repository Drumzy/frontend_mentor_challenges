import {defineCollection, z} from 'astro:content'

export const collections = {
    challenges: defineCollection({
        schema: z.object({
            title: z.string(),
        })
    })
}