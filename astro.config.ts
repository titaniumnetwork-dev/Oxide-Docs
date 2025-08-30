import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";
import rehypeShiki from "@shikijs/rehype";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.titaniumnetwork.org",
  markdown: {
    rehypePlugins: [
      [
        rehypeAstroRelativeMarkdownLinks,
        {
          collectionBase: false,
        },
      ],
      [
        rehypeShiki,
        {
          inline: "tailing-curly-colon",
          themes: {
            light: "tokyo-night",
            dark: "tokyo-night",
          },
        },
      ],
    ],
  },
  integrations: [
    starlight({
      title: "Titanium Network",
      favicon: "/favicon.png",
      social: {
        github: "https://github.com/titaniumnetwork-dev/Oxide-Docs",
        discord: "https://discord.gg/unblock",
      },
      components: {
        Head: "./src/components/MetadataHead.astro",
        PageTitle: "./src/components/PageTitle.astro",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Services",
          autogenerate: { directory: "services" },
        },
        {
          label: "Proxies",
          autogenerate: { directory: "proxies" },
        },
        {
          label: "Technologies",
          autogenerate: { directory: "technologies" },
        },
        {
          label: "Transports",
          autogenerate: { directory: "transports" },
        },
        {
          label: "Kajigs",
          autogenerate: { directory: "kajigs" },
        },
      ],
      customCss: [
        "./src/styles/custom.css",
        "@fontsource/raleway/400.css",
        "@fontsource/raleway/600.css",
      ],
    }),
  ],
});
