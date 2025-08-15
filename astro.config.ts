import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.titaniumnetwork.org",

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
