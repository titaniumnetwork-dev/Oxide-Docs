import { defineCollection, z, getCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        github: z.string().optional(),
        gitlab: z.string().optional(),
        discord: z.string().optional(),
        "official-link": z.string().optional(),
        kernver: z.number().optional(),
        unenrollment: z.boolean().optional(),
        nolower: z.boolean().optional(),
      }),
    }),
  }),
};

export async function getkajigs(u: boolean) {
  const kajigs = (await getCollection("docs")).filter(
    (doc) =>
      doc.id.startsWith("kajigs/") &&
      doc.data.kernver !== undefined &&
      (!u || doc.data.unenrollment === true)
  );
  const kernver: Record<
    number,
    { title: string; slug: string; color: string }[]
  > = {};
  for (const doc of kajigs) {
    const key = doc.data.kernver!;
    let color = "default";
    if (doc.data.nolower) color = "#FF69B4";
    if (!kernver[key]) kernver[key] = [];
    kernver[key].push({
      title: doc.data.title,
      slug: `/${doc.slug}`,
      color: color,
    });
  }
  return kernver;
}

export const kernvers = {
  1: "<=r110",
  2: "r111-r119",
  3: "r120-r124",
  4: "r125-r131",
  5: "r132-r137",
  6: "r138-r143",
  7: ">=r144",
};
