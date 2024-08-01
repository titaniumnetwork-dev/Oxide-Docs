// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.vsDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs',
  tagline:
    'The official documentation for Titanium Network, an organization dedicated to providing services related to bypassing internet censorship. Our projects expect to provide users, and itself, with a less restrictive browsing experience. Here we provide advanced web proxy services through the progression of web proxy technologies.',
  url: 'https://docs.titaniumnetwork.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://titaniumnetwork.org/logo.png',

  organizationName: 'titaniumnetwork-dev',
  projectName: 'Oxide-Docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexBlog: false,
        docsRouteBasePath: '/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/titaniumnetwork-dev/Oxide-Docs/tree/master/docs/',
          routeBasePath: '/',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.8,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content:
            'proxy, web proxy, unblock websites, unblock chromebook, free web proxy, proxy list, proxy sites, un block chromebook, online proxy, proxy server, proxysite, proxy youtube, bypass securly, bypass iboss, bypass lightspeed filter, holy unblocker, chromebooks, titanium network, unblock youtube, youtube proxy, unblocked youtube, youtube unblocked, Titanium Network, Hypertabs, Securly, iboss, Relay, Lightspeed, Unblock, Bypass, Chromebooks, Alloy Proxy',
        },
        { name: 'googlebot', content: 'index, follow, snippet' },
      ],
      headTags: [
        {
          tagName: 'link',
          attributes: {
            rel: 'preconnect',
            href: 'https://titaniumnetwork.org',
          },
        },

        {
          tagName: 'script',
          attributes: {
            type: 'application/ld+json',
          },
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'Titanium Network',
            'alternateName': 'Titanium Network (Documentation)',
            'url': 'https://docs.titaniumnetwork.org',
            'logo': 'https://titaniumnetwork.org/logo.png',
            'sameAs': [
              'https://github.com/titaniumnetwork-dev',
              'https://twitter.com/titaniumnetdev',
              'https://www.youtube.com/channel/UC6LaREFvs9L72SK1s2PcxNg',
              'https://holyunblocker.org'
            ]
          })
        }
        ,
        
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        style: "dark",
        title: 'Titanium Network // Documentation',
        logo: {
          alt: 'TitaniumNetwork',
          src: 'https://avatars.githubusercontent.com/u/47227492',
        },
        items: [
          {
            href: 'https://titaniumnetwork.org',
            label: 'Official Site',
            position: 'right',
          },
          {
            href: 'https://discord.gg/unblock',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://www.youtube.com/channel/UC6LaREFvs9L72SK1s2PcxNg',
            label: 'YouTube',
            position: 'right',
          },
          {
            href: 'https://github.com/titaniumnetwork-dev/Oxide-Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Get Started",
                to: "/services",
              },
              {
                label: "Guides",
                to: "/category/guides",
              },
              {
                label: "Web Proxies",
                to: "/category/proxies",
              },
              {
                label: "Exploits",
                to: "/services/kajigs",
              },
            ],
          },
          {
            title: "Services",
            items: [
              {
                label: "Anura OS",
                href: "https://anura.pro",
              },
              {
                label: "Holy Unblocker",
                href: "https://holyunblocker.org",
              },
              {
                label: "Nebula Proxy",
                href: "https://nebulaproxy.io",
              },
              {
                label: "webretro",
                href: "https://github.com/BinBashBanana/webretro",
              },
              {
                label: "Alu",
                href: "https://aluu.xyz",
              },
              {
                label: "Kazwire",
                href: "https://kazwire.com",
              },
              {
                label: "Ludicrous",
                href: "https://ludicrous.icu",
              },
              {
                label: "Radon Games",
                href: "https://radon.games",
              },
              {
                label: "Totally Science",
                href: "https://totallyscience.co",
              },
              {
                label: "AnuraOS",
                href: "https://anura.pro",
              },
            ],
          },
          {
            title: "Archived",
            items: [
              {
                label: "Incognito",
                href: "https://github.com/caracal-js/Incognito",
              },
              {
                label: "Hypertabs",
                href: "https://github.com/amethystnetwork-dev/Hypertabs",
              },
              {
                label: "Corrosion Proxy",
                href: "https://github.com/titaniumnetwork-dev/Corrosion",
              },
              {
                label: "Alloy Proxy",
                href: "https://github.com/titaniumnetwork-dev/alloy",
              },
              {
                label: "PyDodge B",
                href: "https://github.com/BinBashBanana/PyDodge",
              },
              {
                label: "Greenlime",
                href: "https://github.com/kol-ton/greenlime",
              },
              {
                label: "P2",
                href: "https://github.com/titaniumnetwork-dev/titanium-p2",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Mercury Workshop",
                href: "https://mercurywork.shop",
              },
              {
                label: "Discord",
                href: "https://discord.gg/unblock",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/titaniumnetdev",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Titanium Network`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
