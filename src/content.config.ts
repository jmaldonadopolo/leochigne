import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const categories = ["branding", "design", "diseño", "photography", "video"] as const;

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.enum(categories),
    slug: z.string(),
    images: z.array(z.string()).min(1),
  }),
});

export const collections = { portfolio };
export const portfolioCategories = categories;
export type PortfolioCategory = (typeof categories)[number];
