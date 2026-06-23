import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const categories = ["branding", "editorial", "graphic", "motion", "video"] as const;

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.enum(categories),
    cover: z.string(),
    gallery: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { portfolio };
export const portfolioCategories = categories;
export type PortfolioCategory = (typeof categories)[number];
