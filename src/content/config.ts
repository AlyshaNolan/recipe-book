import { defineCollection, z } from "astro:content";

const recipeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ingredients: z.array(z.string()),
    hero_image: z.object({
      path: z.string().nullable(),
      alt: z.string().nullable(),
    }),
    serves: z.number().positive(),
    prep_time: z.string(),
    cooking_time: z.string(),
    original_recipe: z.string().nullable(),
    tags: z.array(z.string())
  }),
});
  
const pagesCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        page_size: z.number().positive(),
    })
});

export const collections = {
  recipes: recipeCollection,
  pages: pagesCollection,
};