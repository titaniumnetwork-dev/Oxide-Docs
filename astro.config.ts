import starlight from "@astrojs/starlight";
import rehypeShiki from "@shikijs/rehype";
import { defineConfig } from "astro/config";
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";

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
  redirects: {
    "/kajigs/caubdns-proxy-editor": "/kajigs/caub#caubdns-proxy-editor",
    "/kajigs/caudns": "/kajigs/caub#caudns",
    "/kajigs/connection-on-whitelisted-wifi":
      "/kajigs/wifi#connect-to-non-whitelisted-networks",
    "/kajigs/crosver": "/kajigs/versions#what-versions-can-i-recover-to",
    "/kajigs/downgrading": "/kajigs/versions",
    "/kajigs/kernverinfo": "/kajigs/versions#what-versions-can-i-recover-to",
    "/kajigs/lockdown-browser":
      "/kajigs/webviews#eduphoria-lockdown-browser-webview",
    "/kajigs/ltmeat": "/kajigs/extensions#ltmeat-v114",
    "/kajigs/rootless-unenrollment":
      "/kajigs/old-unenroll#rootless-unenrollment-v101",
  },
  integrations: [
    starlight({
      title: "Titanium Network",
      favicon: "/favicon.png",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/titaniumnetwork-dev/Oxide-Docs",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/unblock",
        },
      ],
      plugins: [],
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
          label: "Organizations",
          autogenerate: { directory: "organizations" },
        },
        {
          label: "Services",
          items: [
            {
              label: "Browsing",
              autogenerate: { directory: "services/browsing" },
            },
            {
              label: "WebOS",
              autogenerate: { directory: "services/webos" },
            },
            {
              label: "Unblocked Games",
              autogenerate: { directory: "services/unblocked-games" },
            },
          ],
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
