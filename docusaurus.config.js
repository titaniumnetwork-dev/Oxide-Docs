// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docs",
  tagline:
    "The official documentations site for Titanium Network, an organization dedicated innovating web proxy technologies. Made with Docusaurus.",
  url: "https://docs.titaniumnetwork.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://titaniumnetwork.org/logo.png",

  organizationName: "titaniumnetwork-dev",
  projectName: "Oxide-Docs",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexBlog: false,
        docsRouteBasePath: "/",
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/titaniumnetwork-dev/Oxide-Docs/tree/master/docs/",
          routeBasePath: "/",
        },
      }),
    ],
  ],

  scripts: [
    {
      src: "https://titaniumnetwork.org/seo.json",
      type: "application/ld+json",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content:
            "proxy, web proxy, unblock websites, unblock chromebook, free web proxy, proxy list, proxy sites, un block chromebook, online proxy, proxy server, proxysite, proxy youtube, bypass securly, bypass iboss, bypass lightspeed filter, holy unblocker, chromebooks, titanium network, unblock youtube, youtube proxy, unblocked youtube, youtube unblocked, Titanium Network, Hypertabs, Securly, iboss, Relay, Lightspeed, Unblock, Bypass, Chromebooks, Alloy Proxy",
        },
        { name: "googlebot", content: "index, follow, snippet" },
      ],
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: "Titanium Network // Documentation",
        logo: {
          alt: "TitaniumNetwork",
          src: "https://titaniumnetwork.org/logo.png",
        },
        items: [
          {
            href: "https://github.com/titaniumnetwork-dev/Oxide-Docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
