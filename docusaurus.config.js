// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

function ignoreBenignResizeObserverErrors() {
  return {
    name: 'ignore-benign-resize-observer-errors',
    configureWebpack() {
      return {
        devServer: {
          client: {
            overlay: {
              runtimeErrors: (error) =>
                ![
                  'ResizeObserver loop completed with undelivered notifications.',
                  'ResizeObserver loop limit exceeded',
                ].includes(error.message),
            },
          },
        },
      };
    },
  };
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Steadfast Courier API Documentation',
  tagline: 'Complete REST API Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://sufianrubel.github.io',
  baseUrl: '/steadfast-api-docs/',
  organizationName: 'sufianrubel',
  projectName: 'steadfast-api-docs',
  staticDirectories: ['static', 'openapi'],
  onBrokenLinks: 'throw',
  future: {
    v4: true,
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#34A487',
      },
    },
  ],
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
          docItemComponent: '@theme/ApiItem',
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
    ignoreBenignResizeObserverErrors,
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 10,
        searchBarPosition: 'right',
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          steadfast: {
            specPath: 'openapi/steadfast-api.yaml',
            outputDir: 'docs/api',
          },
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-mermaid', 'docusaurus-theme-openapi-docs'],
  markdown: {
    mermaid: true,
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            sidebarId: 'docsSidebar',
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
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Create your first order', to: '/docs/quick-start'},
              {label: 'Authentication', to: '/docs/authentication'},
            ],
          },
          {
            title: 'API',
            items: [
              {label: 'Order lifecycle', to: '/docs/orders/create-order'},
              {label: 'Bulk Order', to: '/docs/api/create-bulk-order'},
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sufianrubel/steadfast-api-docs',
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
