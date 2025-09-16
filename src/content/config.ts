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
        unenrollment: z.boolean().optional(),
      }),
    }),
  }),
};

export async function getkajigs(u: boolean) {
  const kajigs = ( await getCollection("docs")).filter((doc) => doc.id.startsWith("kajigs/") && doc.data.kernver !== undefined && (!u || doc.data.unenrollment === true));
  const kernver: Record<number, { title: string; slug: string }[]> = {};
  for (const doc of kajigs) {
    const key = doc.data.kernver!;
    if (!kernver[key]) kernver[key] = [];
    kernver[key].push({ title: doc.data.title, slug: `/${doc.slug}` });
  }
  return kernver;
}

export const kernvers = {
  0: ["Any", "All Versions", "All Versions"],
  1: ["1", "<v112", "All Versions"],
  2: "v112-v119",
  3: "v120-v123",
  4: "v124-v132",
  5: "v132-v137",
  6: "v138+",
};