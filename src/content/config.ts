import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        github: z.string().optional(),
        discord: z.string().optional(),
        "official-link": z.string().optional(),
      }),
    }),
  }),
};
