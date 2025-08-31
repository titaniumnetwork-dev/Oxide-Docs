// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";

// https://astro.build/config
export default defineConfig({
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
        })
      ],
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
