// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Steadfast Courier API Documentation",
  tagline: "Complete REST API Documentation",
  favicon: "img/favicon.ico",
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#34A487',
      },
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sufianrubel.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/steadfast-api-docs/',
  staticDirectories: ['static', 'openapi'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sufianrubel', // Usually your GitHub org/user name.
  projectName: 'steadfast-api-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sufianrubel/steadfast-api-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 10,
        searchBarPosition: "right",
      },
    ],

    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          steadfast: {
            specPath: "openapi/steadfast-api.yaml",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: [
    "@docusaurus/theme-mermaid",
    "docusaurus-theme-openapi-docs",
  ],

  markdown: {
    mermaid: true,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/steadfast-api-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Steadfast Developers',
        logo: {
          alt: 'Steadfast API Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/api-explorer', label: 'API Explorer', position: 'left'},
          {to: '/docs/changelog', label: 'Changelog', position: 'left'},
          {
            type: 'dropdown',
            label: 'v1.2',
            position: 'right',
            items: [
              {label: 'v1.2 · Current', to: '/docs/changelog/v1.2.0'},
              {label: 'v1.1', to: '/docs/changelog/v1.1.0'},
              {label: 'v1.0', to: '/docs/changelog/v1.0.0'},
            ],
          },
          {
            href: 'https://github.com/sufianrubel/steadfast-api-docs',
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
                label: "Quick Start",
                to: "/docs/quick-start",
              },
              {
                label: "Authentication",
                to: "/docs/authentication",
              },
            ],
          },

          {
            title: "API",
            items: [
              {
                label: "Create Order",
                to: "/docs/orders/create-order",
              },
              {
                label: "Bulk Order",
                to: "/docs/orders/bulk-order",
              },
            ],
          },

          {
            title: "Resources",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/sufianrubel/steadfast-api-docs",
              },
            ],
          },

        ],

        copyright: `© ${new Date().getFullYear()} Steadfast Courier. Built for developers shipping across Bangladesh.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
