import { defineCollection, z, getCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        github: z.string().optional(),
        discord: z.string().optional(),
        "official-link": z.string().optional(),
        kernver: z.number().optional(),
      }),
    }),
  }),
};

export async function getkajigs() {
  const kajigs = ( await getCollection("docs")).filter((doc) => doc.id.startsWith("kajigs/") && doc.id !== "kajigs" && doc.data.kernver !== undefined );
  const kernver: Record<number, { title: string; slug: string }[]> = {};
  for (const doc of kajigs) {
    const key = doc.data.kernver!;
    if (!kernver[key]) kernver[key] = [];
    kernver[key].push({ title: doc.data.title, slug: `/${doc.slug}` });
  }
  return kernver;
}
