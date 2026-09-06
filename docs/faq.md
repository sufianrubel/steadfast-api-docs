---
title: Frequently asked questions
description: Answers about Steadfast Courier API credentials, orders, tracking, returns, balances, and payments.
sidebar_position: 3
slug: /faq
---

# Frequently asked questions

## Where do I get the Api-Key and Secret-Key?

Sign in to the [Steadfast merchant panel](https://steadfast.com.bd/login), locate your API credentials, and copy both values. Follow [Get API credentials](./getting-started.md) for secure storage guidance.

## Which authentication headers are required?

Every request requires `Api-Key` and `Secret-Key`. Requests with a JSON body also require `Content-Type: application/json`. See [Authenticate requests](./authentication.md).

## Can I call the API directly from a website or mobile app?

No. Put API calls in trusted server-side code so the `Secret-Key` is not shipped to users.

## How do I create an order?

Call [`POST /create_order`](./api/create-order.api.mdx) with a unique invoice, recipient details, and COD amount. The [first-order guide](./quick-start.md) provides a complete request.

## How many orders can I submit in one bulk request?

[`POST /create_order/bulk-order`](./api/create-bulk-order.api.mdx) accepts between 1 and 500 orders in its `data` array.

## Which identifiers should I store?

Store the merchant `invoice` plus the returned `consignment_id` and `tracking_code`. Each identifier has a corresponding tracking endpoint.

## How do I check delivery status?

Track by [invoice](./api/status-by-invoice.api.mdx), [tracking code](./api/status-by-tracking-code.api.mdx), or [consignment ID](./api/status-by-consignment-id.api.mdx). Interpret the response with the [delivery status reference](./reference/delivery-statuses.md).

## What phone number format is accepted?

The current API schema accepts an 11-digit Bangladeshi mobile number beginning with `013` through `019`, for example `01712345678`.

## Can the COD amount be zero?

Yes. `cod_amount` must be zero or greater.

## How do I request a return?

Send the eligible shipment's `consignment_id` to [`POST /create_return_request`](./api/create-return-request.api.mdx).

## How do I review balance and payments?

Use [Get current balance](./api/get-current-balance.api.mdx) and [List payments](./api/get-payments.api.mdx).

## Should failed requests be retried?

Retry only temporary connection or server failures. Correct authentication, identifier, and validation errors before sending another request. See [Errors and retries](./reference/error-codes.md).

## Where can I report an API issue?

Contact Steadfast Courier support when an authenticated request consistently behaves differently from the documented endpoint contract. Include the endpoint, time, invoice or consignment identifier, HTTP status, and redacted response. Never include your `Secret-Key`.
