import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";
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
  redirects: {
    "/kajigs/caubdns-proxy-editor": "/kajigs/caub#caubdns-proxy-editor",
    "/kajigs/caudns": "/kajigs/caub#caudns",
    "/kajigs/connection-on-whitelisted-wifi": "/kajigs/wifi#connect-to-non-whitelisted-networks",
    "/kajigs/crosver": "/kajigs/versions#what-versions-can-i-recover-to",
    "/kajigs/downgrading": "/kajigs/versions",
    "/kajigs/kernverinfo": "/kajigs/versions#what-versions-can-i-recover-to",
    "/kajigs/lockdown-browser": "/kajigs/webviews#eduphoria-lockdown-browser-webview",
    "/kajigs/ltmeat": "/kajigs/extensions#ltmeat-v114",
    "/kajigs/rootless-unenrollment": "/kajigs/old-unenroll#rootless-unenrollment-v101",
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
      plugins: [
        starlightTypeDoc({
          entryPoints: ["./typedoc-repos/scramjet/src/entry.ts"],
          tsconfig: "./tsconfig-scramjet.json",
          sidebar: {
            label: "Scramjet API",
          },
          typeDoc: {
            skipErrorChecking: true,
            excludeNotDocumented: false,
            treatWarningsAsErrors: false,
          },
        }),
      ],
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
          items: [
            "proxies/rammerhead",
            "proxies/ultraviolet",
            "proxies/scramjet",
            typeDocSidebarGroup,
          ],
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
