import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/steadfast-api",
    },
    {
      type: "category",
      label: "Orders",
      items: [
        {
          type: "doc",
          id: "api/create-order",
          label: "Create Order",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Payments",
      items: [
        {
          type: "doc",
          id: "api/current-balance",
          label: "Current Balance",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/payment-list",
          label: "Payment List",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Returns",
      items: [
        {
          type: "doc",
          id: "api/create-return-request",
          label: "Create Return Request",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
