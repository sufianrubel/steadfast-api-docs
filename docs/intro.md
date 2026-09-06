---
title: Steadfast Courier API
description: Integrate order creation, parcel tracking, returns, balances, and payments with the Steadfast Courier REST API.
sidebar_position: 1
slug: /
---

# Steadfast Courier API

Use the Steadfast Courier REST API to create consignments, track parcel delivery, request returns, and review account balances and payments.

## Integration path

Follow these steps in order:

1. [Get your API credentials](./getting-started.md) from the [Steadfast merchant panel](https://steadfast.com.bd/login).
2. [Configure authentication](./authentication.md) on your application server.
3. [Create your first order](./quick-start.md) and save its identifiers.
4. Follow the [order lifecycle guide](./guides/order-lifecycle.md) to track delivery and handle returns.
5. Use the [API reference](./api-reference.md) when implementing each endpoint.

:::info Production API

Base URL: `https://portal.packzy.com/api/v1`

All requests and responses use JSON. Requests with a body must include `Content-Type: application/json`.

:::

## Available workflows

| Workflow | Purpose |
| --- | --- |
| Orders | Create one consignment or submit up to 500 orders in one request |
| Tracking | Check a parcel by invoice, tracking code, or consignment ID |
| Returns | Request a return for an eligible consignment |
| Account | Check the merchant balance and list payments |

## Need help?

Start with [error handling](./reference/error-codes.md) and the [FAQ](./faq.md). If an API response differs from the documented contract, contact Steadfast Courier support.
