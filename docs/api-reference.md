---
title: API reference overview
description: Choose the Steadfast Courier API endpoint for each stage of the merchant workflow.
sidebar_position: 1
slug: /api-reference
---

# API reference overview

The endpoint reference is generated from the project's OpenAPI specification. Use the workflow below to choose an endpoint, then open its page for parameters, schemas, examples, and responses.

| Stage | Task | Endpoint |
| --- | --- | --- |
| Create | Create one consignment | [`POST /create_order`](./api/create-order.api.mdx) |
| Create | Create up to 500 consignments | [`POST /create_order/bulk-order`](./api/create-bulk-order.api.mdx) |
| Track | Find status using your invoice | [`GET /status_by_invoice/{invoice}`](./api/status-by-invoice.api.mdx) |
| Track | Find status using a tracking code | [`GET /status_by_trackingcode/{trackingCode}`](./api/status-by-tracking-code.api.mdx) |
| Track | Find status using a consignment ID | [`GET /status_by_cid/{consignmentId}`](./api/status-by-consignment-id.api.mdx) |
| Return | Request a consignment return | [`POST /create_return_request`](./api/create-return-request.api.mdx) |
| Reconcile | Get the current merchant balance | [`GET /get_balance`](./api/get-current-balance.api.mdx) |
| Reconcile | List merchant payments | [`GET /get_payments`](./api/get-payments.api.mdx) |

## Before trying an endpoint

1. Get your `Api-Key` and `Secret-Key` from the [Steadfast merchant panel](https://steadfast.com.bd/login).
2. Review [authentication](./authentication.md).
3. In the interactive reference, select **Authorize** and enter both values.

Credentials entered in the reference are sent as the `Api-Key` and `Secret-Key` request headers. Use real credentials only on a trusted device.
