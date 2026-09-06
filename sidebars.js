// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Start here',
      collapsed: false,
      items: ['intro', 'getting-started', 'authentication', 'quick-start'],
    },
    {
      type: 'category',
      label: 'Integration workflow',
      items: ['guides/order-lifecycle'],
    },
    {
      type: 'category',
      label: 'API reference',
      items: [
        {
          type: 'doc',
          id: 'api-reference',
        },
        {
          type: 'category',
          label: 'Orders',
          items: ['api/create-order', 'api/create-bulk-order'],
        },
        {
          type: 'category',
          label: 'Tracking',
          items: [
            'api/status-by-invoice',
            'api/status-by-tracking-code',
            'api/status-by-consignment-id',
          ],
        },
        {
          type: 'category',
          label: 'Returns',
          items: ['api/create-return-request'],
        },
        {
          type: 'category',
          label: 'Account and payments',
          items: ['api/get-current-balance', 'api/get-payments'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Help and reference',
      items: ['reference/delivery-statuses', 'reference/error-codes', 'faq'],
    },
    {
      type: 'category',
      label: 'Changelog',
      items: [
        'changelog/index',
        'changelog/v1.2.0',
        'changelog/v1.1.0',
        'changelog/v1.0.0',
      ],
    },
  ],
};

export default sidebars;
